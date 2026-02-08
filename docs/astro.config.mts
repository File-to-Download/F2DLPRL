import {defineConfig} from 'astro/config'

import sitemap from '@astrojs/sitemap'

export default defineConfig({
	site: 'https://license.fileto.download',
	integrations: [sitemap()],
	vite: {server: {fs: {allow: ['..']}}}
})
