import { join } from 'path';
import AutoLoad, { type AutoloadPluginOptions } from '@fastify/autoload';
import type { FastifyPluginAsync } from 'fastify';

export type AppOptions = {
	// Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {};

/* @eslint-disable */
const app: FastifyPluginAsync<AppOptions> = async (
	fastify,
	opts,
	// eslint-disable-next-line @typescript-eslint/require-await -- intentionally asynchronous
): Promise<void> => {
	// Place here your custom code!

	// Do not touch the following lines

	// This loads all plugins defined in plugins
	// those should be support plugins that are reused
	// through your application
	void fastify.register(AutoLoad, {
		dir: join(__dirname, 'plugins'),
		options: opts,
	});

	// This loads all plugins defined in routes
	// define your routes in one of these
	void fastify.register(AutoLoad, {
		dir: join(__dirname, 'routes'),
		options: opts,
	});
};

export { app, options };
