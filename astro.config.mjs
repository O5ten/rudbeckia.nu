// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki';

// https://astro.build/config
export default defineConfig({
	site: 'https://o5ten.github.io',
	base: '/rudbeckia.nu',
	integrations: [
		starlight({
			plugins: [starlightThemeFlexoki({ accentColor: 'yellow' })],
			title: 'Kollektivhuset Rudbeckia',
			logo: {
				src: './src/assets/rudbeckia.png',
				alt: 'Rudbeckias logotyp',
			},
			favicon: '/favicon.png',
			defaultLocale: 'sv',
			locales: {
				root: { label: 'Svenska', lang: 'sv' },
			},
			social: [
				{
					icon: 'facebook',
					label: 'Facebook',
					href: 'https://www.facebook.com/kollektivhusuppsalarosendal',
				},
				{
					icon: 'instagram',
					label: 'Instagram',
					href: 'https://www.instagram.com/kollektivhuset_rudbeckia/',
				},
				{
					icon: 'heart',
					label: 'Intresseanmälan för lägenhet (ny@rudbeckia.nu)',
					href: 'mailto:ny@rudbeckia.nu',
				},
				{
					icon: 'external',
					label: 'Lediga lägenheter hos Uppsala bostadsförmedling',
					href: 'https://www.bostad.uppsala.se/mypages/app?district=Rosendal&objectType=collective&region=Uppsala',
				},
			],
			sidebar: [
				{
					label: 'Tjänster',
					items: [
						{ label: 'Mattermost', link: 'https://chat.rudbeckia.nu', attrs: { target: '_blank', rel: 'noopener' } },
						{ label: 'Wiki', link: 'https://wiki.rudbeckia.nu', attrs: { target: '_blank', rel: 'noopener' } },
						{ label: 'Kalender', link: 'https://calendar.rudbeckia.nu', attrs: { target: '_blank', rel: 'noopener' } },
						{ label: 'Recept', link: 'https://recept.rudbeckia.nu', attrs: { target: '_blank', rel: 'noopener' } },
						{ label: 'Dokument', link: '/dokument/' },
					],
				},
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
