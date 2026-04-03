import { ChutesFlat } from '..';
import Deepseek from './Deepseek.svelte';
import Kimi from './Kimi.svelte';
import Microsoft from './Microsoft.svelte';
import Mistral from './Mistral.svelte';
import OpenAi from './OpenAI.svelte';
import Qwen from './Qwen.svelte';
import Templar from './Templar.svelte';
import Zai from './ZAI.svelte';

export const getProviderIcon = (provider: string) => {
	const lowerProvider = provider.toLowerCase();

	if (lowerProvider.includes('deepseek')) {
		return Deepseek;
	}

	if (lowerProvider.includes('qwen')) {
		return Qwen;
	}
	if (lowerProvider.includes('templar')) {
		return Templar;
	}
	if (lowerProvider.includes('mistral')) {
		return Mistral;
	}

	if (lowerProvider.includes('kimi')) {
		return Kimi;
	}

	if (lowerProvider.includes('microsoft')) {
		return Microsoft;
	}

	if (lowerProvider.includes('openai')) {
		return OpenAi;
	}

	if (lowerProvider.includes('zai')) {
		return Zai;
	}

	return ChutesFlat;
};
