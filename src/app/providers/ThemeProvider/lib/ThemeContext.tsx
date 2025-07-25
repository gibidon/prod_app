import { createContext } from 'react';

/* eslint-disable no-unused-vars */
export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}
/* eslint-disable no-unused-vars */

export interface ThemeContextProps {
    theme?: Theme
    // eslint-disable-next-line no-unused-vars
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
