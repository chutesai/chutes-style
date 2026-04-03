import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = fileURLToPath(new URL('.', import.meta.url));
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || '127.0.0.1';

const mimeTypes = {
	'.css': 'text/css; charset=utf-8',
	'.html': 'text/html; charset=utf-8',
	'.jpg': 'image/jpeg',
	'.js': 'text/javascript; charset=utf-8',
	'.json': 'application/json; charset=utf-8',
	'.md': 'text/markdown; charset=utf-8',
	'.mp4': 'video/mp4',
	'.png': 'image/png',
	'.svg': 'image/svg+xml',
	'.txt': 'text/plain; charset=utf-8',
	'.webp': 'image/webp',
	'.woff2': 'font/woff2'
};

function parseRangeHeader(rangeHeader, fileSize) {
	if (!rangeHeader?.startsWith('bytes=')) return null;

	const [startToken, endToken] = rangeHeader.replace('bytes=', '').split('-', 2);
	let start = startToken === '' ? null : Number(startToken);
	let end = endToken === '' ? null : Number(endToken);

	if ((start !== null && Number.isNaN(start)) || (end !== null && Number.isNaN(end))) {
		return null;
	}

	if (start === null) {
		const suffixLength = end ?? 0;
		start = Math.max(fileSize - suffixLength, 0);
		end = fileSize - 1;
	} else {
		end = end === null ? fileSize - 1 : Math.min(end, fileSize - 1);
	}

	if (start < 0 || start > end || end >= fileSize) {
		return null;
	}

	return { start, end };
}

function resolveRequestPath(urlPathname) {
	if (urlPathname === '/' || urlPathname === '') {
		return join(rootDir, 'index.html');
	}

	const decodedPath = decodeURIComponent(urlPathname);
	const candidatePath = normalize(join(rootDir, decodedPath));

	if (!candidatePath.startsWith(rootDir)) {
		return null;
	}

	return candidatePath;
}

const server = createServer(async (request, response) => {
	const requestUrl = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`);

	if (requestUrl.pathname === '/__health') {
		response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
		response.end('ok');
		return;
	}

	const filePath = resolveRequestPath(requestUrl.pathname);

	if (!filePath) {
		response.writeHead(403, { 'content-type': 'text/plain; charset=utf-8' });
		response.end('Forbidden');
		return;
	}

	try {
		const fileStats = await stat(filePath);
		const contentType = mimeTypes[extname(filePath)] || 'application/octet-stream';
		const baseHeaders = {
			'accept-ranges': 'bytes',
			'cache-control': 'no-cache',
			'content-type': contentType
		};

		if (request.headers.range) {
			const range = parseRangeHeader(request.headers.range, fileStats.size);

			if (!range) {
				response.writeHead(416, {
					...baseHeaders,
					'content-range': `bytes */${fileStats.size}`
				});
				response.end();
				return;
			}

			const { start, end } = range;
			response.writeHead(206, {
				...baseHeaders,
				'content-length': end - start + 1,
				'content-range': `bytes ${start}-${end}/${fileStats.size}`
			});

			if (request.method === 'HEAD') {
				response.end();
				return;
			}

			createReadStream(filePath, { start, end }).pipe(response);
			return;
		}

		response.writeHead(200, {
			...baseHeaders,
			'content-length': fileStats.size
		});

		if (request.method === 'HEAD') {
			response.end();
			return;
		}

		createReadStream(filePath).pipe(response);
	} catch (error) {
		const statusCode = error && error.code === 'ENOENT' ? 404 : 500;
		const message = statusCode === 404 ? 'Not found' : 'Server error';

		response.writeHead(statusCode, { 'content-type': 'text/plain; charset=utf-8' });
		response.end(message);
	}
});

server.listen(port, host, () => {
	console.log(`Chutes style preview is running at http://${host}:${port}`);
	console.log('Serving / as index.html');
});
