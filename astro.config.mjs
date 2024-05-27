import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
const isProduction = process.env.NODE_ENV == 'production'

// https://astro.build/config
export default defineConfig({
	site: 'https://movido-cloud.github.io/aadvanto-docs',
	base: isProduction ? '/aadvanto-docs' : '/', // Conditionally set the base path
	integrations: [
		starlight({
			title: 'Billing System Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Introduction',
					autogenerate : { directory: 'introduction' }
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	]
});