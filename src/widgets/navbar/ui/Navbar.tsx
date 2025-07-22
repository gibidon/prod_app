import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/config/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <ThemeSwitcher/>
        <div className="links">
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>Главная</AppLink>
            <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'} className={cls.mainLink}>О нас</AppLink>
        </div>
    </div>
  );
};
