// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://test.rudbeckia.nu',
	integrations: [
		starlight({
			title: 'Kollektivhuset Rudbeckia',
			defaultLocale: 'sv',
			locales: {
				root: { label: 'Svenska', lang: 'sv' },
			},
			social: [
				{
					icon: 'external',
					label: 'rudbeckia.nu',
					href: 'https://rudbeckia.nu',
				},
			],
			sidebar: [
				{ label: 'Hem', link: '/' },
				{ label: 'Nyinflyttad', link: '/nyinflyttad/' },
				{
					label: 'Föreningen',
					items: [
						{ label: 'Översikt', link: '/foreningen/' },
						{ label: 'Värdegrund', link: '/foreningen/vardegrund/' },
						{ label: 'Medlemskap', link: '/foreningen/medlemskap/' },
						{ label: 'Förmedlingspolicy', link: '/foreningen/formedlingspolicy/' },
						{ label: 'Husmötet', link: '/foreningen/husmotet/' },
						{ label: 'Styrelsen', link: '/foreningen/styrelsen/' },
						{ label: 'Föregående styrelser', link: '/foreningen/foregaende-styrelser/' },
					],
				},
				{
					label: 'Kollektivet',
					items: [
						{ label: 'Översikt', link: '/kollektivet/' },
						{ label: 'Arbetsgrupper', link: '/kollektivet/arbetsgrupper/' },
						{ label: 'Matlagen', link: '/kollektivet/matlagen/' },
						{ label: 'Städning', link: '/kollektivet/stadning/' },
						{ label: 'Städschema', link: '/kollektivet/stadschema/' },
						{ label: 'Odling', link: '/kollektivet/odling/' },
						{ label: 'Digital kommunikation', link: '/kollektivet/digital-kommunikation/' },
					],
				},
				{
					label: 'Huset',
					items: [
						{ label: 'Översikt', link: '/huset/' },
						{ label: 'Bofaktablad', link: '/huset/bofaktablad/' },
						{ label: 'Matsalen', link: '/huset/matsalen/' },
						{ label: 'Köket', link: '/huset/koket/' },
						{ label: 'Vardagsrummet', link: '/huset/vardagsrummet/' },
						{ label: 'Lekrummet', link: '/huset/lekrummet/' },
						{ label: 'Gästrummen', link: '/huset/gastrummen/' },
						{ label: 'Cykelrummet', link: '/huset/cykelrummet/' },
						{ label: 'Snickarverkstaden', link: '/huset/snickarverkstaden/' },
						{ label: 'Takterassen', link: '/huset/takterassen/' },
						{ label: 'Regler', link: '/huset/regler/' },
					],
				},
				{ label: 'Kalendarium', link: '/kalendarium/' },
				{ label: 'Boka', link: '/boka/' },
				{ label: 'Rosendal', link: '/rosendal/' },
				{ label: 'Historia', link: '/historia/' },
				{ label: 'Kontakt', link: '/kontakt/' },
			],
		}),
	],
});
