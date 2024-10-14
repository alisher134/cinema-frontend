import { PUBLIC_PAGES } from '@/shared/config';
import {
	LucideBookmark,
	LucideClock,
	LucideDrama,
	LucideFilter,
	LucideFlame,
	LucideHome,
	LucideListCollapse,
	LucideLogIn,
	LucideUser
} from 'lucide-react';
import { IMenu } from './menu.interface';

export const firstMenu: IMenu = {
	items: [
		{
			name: 'Главная',
			link: PUBLIC_PAGES.HOME.BASE,
			icon: LucideHome
		},
		{
			name: 'Каталог',
			link: PUBLIC_PAGES.HOME.CATALOG,
			icon: LucideFilter
		},
		{
			name: 'Популярные',
			link: PUBLIC_PAGES.HOME.POPULAR,
			icon: LucideFlame
		},
		{
			name: 'Жанры',
			link: PUBLIC_PAGES.HOME.GENRES,
			icon: LucideDrama
		}
	]
};

export const secondMenu: IMenu = {
	items: [
		{
			name: 'История',
			link: PUBLIC_PAGES.HOME.HISTORY,
			icon: LucideClock
		},
		{
			name: 'Сохраненные',
			link: PUBLIC_PAGES.HOME.SAVED,
			icon: LucideBookmark
		},
		{
			name: 'Коллекций',
			link: PUBLIC_PAGES.HOME.COLLECTIONS,
			icon: LucideListCollapse
		}
	]
};

export const userMenu: IMenu = {
	items: [
		{
			name: 'Профиль',
			link: PUBLIC_PAGES.PROFILE.BASE,
			icon: LucideUser
		},
		{
			name: 'Настройка',
			link: PUBLIC_PAGES.PROFILE.EDIT,
			icon: LucideLogIn
		}
	]
};

export const authMenu: IMenu = {
	items: [
		{
			name: 'Войти',
			link: PUBLIC_PAGES.AUTH.LOGIN,
			icon: LucideLogIn
		}
	]
};
