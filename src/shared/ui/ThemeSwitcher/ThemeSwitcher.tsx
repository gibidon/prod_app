import { classNames } from "shared/config/lib/classNames/classNames";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import { Button, ThemeButton } from "../Button/Button";
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()
   
    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            { theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon/>}
        Toggle theme
        </Button>
    );
};
