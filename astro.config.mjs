import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.invmy.us.kg',
	integrations: [
		starlight({
			title: 'My Trading Docs',
			locales: {
				root: {
				  label: '简体中文',
				  lang: 'zh-CN',
				},
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			// head: [
			// 	// 示例：添加 Fathom 分析脚本标签。
			// 	{
			// 	  tag: 'script',
			// 	  attrs: {
			// 		src: 'https://cdn.usefathom.com/script.js',
			// 		'data-site': 'MY-FATHOM-ID',
			// 		defer: true,
			// 	  },
			// 	},
			// ],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
