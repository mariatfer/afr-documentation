// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Frontend Documentation',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mariatfer/afr-documentation' }],
			sidebar: [
				{ label: 'Project overview', link: '/documentation/project-overview' },
				{ label: 'Code fragments', link: '/documentation/code-fragments' },
				{ label: 'SEO & performance', link: '/documentation/seo-performance' },
				{ label: 'Metrics', link: '/documentation/metrics' },
			],
		}),
	],
});
