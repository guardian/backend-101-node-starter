import fp from 'fastify-plugin';

// eslint-disable-next-line @typescript-eslint/no-empty-interface -- ignore
export interface SupportPluginOptions {
	// Specify Support plugin options here
}

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
// eslint-disable-next-line import/no-default-export, @typescript-eslint/require-await -- ignore
export default fp<SupportPluginOptions>(async (fastify, opts) => {
	fastify.decorate('someSupport', function () {
		return 'hugs';
	});
});

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
	export interface FastifyInstance {
		someSupport(): string;
	}
}
