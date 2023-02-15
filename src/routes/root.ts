import type { FastifyPluginAsync } from 'fastify';

// eslint-disable-next-line @typescript-eslint/require-await -- intentionally asynchronous
const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
	fastify.get('/', function (request, reply) {
		return { root: true };
	});
};

export { root };
