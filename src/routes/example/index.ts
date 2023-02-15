import type { FastifyPluginAsync } from 'fastify';

// eslint-disable-next-line @typescript-eslint/require-await -- intentionally asynchronous
const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
	fastify.get('/', function (request, reply) {
		return 'this is an example';
	});
};

export { example };
