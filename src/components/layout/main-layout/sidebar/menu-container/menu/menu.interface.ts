import { LucideIcon } from 'lucide-react';

export interface IMenu {
	items: IMenuItem[];
}

export interface IMenuItem {
	name: string;
	link: string;
	icon: LucideIcon;
}
