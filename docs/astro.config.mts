import robots from 'astro-robots'
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

export default defineConfig({
	site: 'https://license.fileto.download',
	build: {
		assets: '_f2dl',
		format: 'preserve'
	},
	integrations: [
		sitemap({
			lastmod: new Date(),
			priority: 1
		}),
		robots({
			policy: [{ userAgent: '*', allow: '/' }],
			host: 'license.fileto.download'
		})
	],
	vite: { server: { fs: { allow: ['..'] } } }
})
