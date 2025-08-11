import React from 'react';
import AboutIcon from 'shared/assets/icons/about_icon.svg';
import MainIcon from 'shared/assets/icons/main_icon.svg';
import ProfileIcon from 'shared/assets/icons/profile-icon_20_20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
    },
];
