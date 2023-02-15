import type { SensibleOptions } from '@fastify/sensible';
import sensible from '@fastify/sensible';
import fp from 'fastify-plugin';

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
// eslint-disable-next-line import/no-default-export, @typescript-eslint/require-await -- ignore
export default fp<SensibleOptions>(async (fastify) => {
	void fastify.register(sensible);
});
