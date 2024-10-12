import {
	SITE_DESCRIPTION,
	SITE_KEYWORDS,
	SITE_NAME,
	SITE_TITLE
} from '@/shared/constants';
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: SITE_TITLE,
		short_name: SITE_NAME,
		categories: SITE_KEYWORDS,
		description: SITE_DESCRIPTION,
		start_url: '/',
		display: 'standalone',
		orientation: 'portrait-primary',
		icons: [
			{
				src: '/apple-icons/apple-touch-icon-57x57.png',
				sizes: '57x57',
				type: 'image/png'
			},
			{
				src: '/apple-icons/apple-touch-icon-72x72.png',
				sizes: '72x72',
				type: 'image/png'
			},
			{
				src: '/apple-icons/apple-touch-icon-76x76.png',
				sizes: '76x76',
				type: 'image/png'
			},
			{
				src: '/apple-icons/apple-touch-icon-114x114.png',
				sizes: '114x114',
				type: 'image/png'
			},
			{
				src: '/apple-icons/apple-touch-icon-120x120.png',
				sizes: '120x120',
				type: 'image/png'
			},
			{
				src: '/apple-icons/apple-touch-icon-144x144.png',
				sizes: '144x144',
				type: 'image/png'
			},
			{
				src: '/apple-icons/apple-touch-icon-152x152.png',
				sizes: '152x152',
				type: 'image/png'
			},
			{
				src: '/apple-icons/apple-touch-icon-180x180.png',
				sizes: '180x180',
				type: 'image/png'
			}
		]
	};
}
