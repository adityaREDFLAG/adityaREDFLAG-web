import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Zono',
			sidebar: [
				{
					label: 'INFO',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Info', link: '/guides/example/' },
					],
				},
			],
		}),
	],
});
