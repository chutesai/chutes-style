const scrollScrubCards = [...document.querySelectorAll('[data-scroll-scrub]')];

if (scrollScrubCards.length > 0 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
	const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

	for (const card of scrollScrubCards) {
		const frameImage = card.querySelector('[data-scroll-frame]');
		const stage = card.querySelector('[data-scroll-stage]');
		const progressFill = card.querySelector('[data-scroll-progress]');
		const readout = card.querySelector('[data-scroll-readout]');

		if (!frameImage || !stage || !progressFill) continue;

		const frameCount = Number(frameImage.dataset.sequenceCount || '1');
		const frameBase = frameImage.dataset.sequenceBase || '';
		const idleProgress = 0.14;
		let ticking = false;
		let currentFrameIndex = -1;

		const frameSources = Array.from({ length: frameCount }, (_, index) => {
			const frameNumber = String(index + 1).padStart(2, '0');
			return `${frameBase}${frameNumber}.jpg`;
		});

		for (const src of frameSources) {
			const image = new Image();
			image.decoding = 'async';
			image.src = src;
		}

		const setProgress = (progress) => {
			const bounded = clamp(progress, 0, 1);
			const rotateX = (0.5 - bounded) * 10;
			const rotateY = (bounded - 0.5) * -18;
			const shiftY = (0.5 - bounded) * 12;
			const frameIndex = Math.min(frameSources.length - 1, Math.round(bounded * (frameSources.length - 1)));

			stage.style.setProperty('--scroll-rotate-x', `${rotateX.toFixed(2)}deg`);
			stage.style.setProperty('--scroll-rotate-y', `${rotateY.toFixed(2)}deg`);
			stage.style.setProperty('--scroll-shift-y', `${shiftY.toFixed(2)}px`);
			progressFill.style.transform = `scaleX(${Math.max(bounded, 0.02).toFixed(4)})`;

			if (readout) {
				readout.textContent = `${Math.round(bounded * 100)}% scrub`;
			}

			if (frameIndex !== currentFrameIndex && frameSources[frameIndex]) {
				frameImage.src = frameSources[frameIndex];
				currentFrameIndex = frameIndex;
			}
		};

		const getProgress = () => {
			const rect = card.getBoundingClientRect();
			const viewportHeight = window.innerHeight || 1;

			if (rect.top > viewportHeight) return idleProgress;
			if (rect.bottom < 0) return 1;

			const start = viewportHeight * 0.88;
			const end = -rect.height * 0.45;
			return clamp((start - rect.top) / (start - end), 0, 1);
		};

		const update = () => {
			ticking = false;
			setProgress(getProgress());
		};

		const queueUpdate = () => {
			if (ticking) return;
			ticking = true;
			window.requestAnimationFrame(update);
		};

		window.addEventListener('scroll', queueUpdate, { passive: true });
		window.addEventListener('resize', queueUpdate);
		document.addEventListener('visibilitychange', queueUpdate);
		queueUpdate();
	}
}
