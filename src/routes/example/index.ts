import type { FastifyPluginAsync } from 'fastify';

const example: FastifyPluginAsync = async (fastify): Promise<void> => {
	fastify.get('/', function () {
		return 'this is an example';
	});
};

export default example;
