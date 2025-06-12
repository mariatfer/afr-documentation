// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Documentación AFR',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Documentación',
					items: [
						{ label: 'Introducción', link: '/documentacion/introduccion' },
						{ label: 'Estructura', link: '/documentacion/estructura' },
						{ label: 'Funcionalidades', link: '/documentacion/funcionalidades' },
						{ label: 'Diseño UI', link: '/documentacion/diseño-ui' },
						{ label: 'Base de datos', link: '/documentacion/base-de-datos' },
						{ label: 'Flujo de compra', link: '/documentacion/flujo-compra' },
						{ label: 'Mejoras futuras', link: '/documentacion/mejoras-futuras' },
					]
				},
			],
		}),
	],
});
