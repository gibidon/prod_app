import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/config/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className="links">

            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/"
                className={cls.mainLink}
            >
                {
                    // eslint-disable-next-line i18next/no-literal-string
                    'Главная'
                }
            </AppLink>
            <AppLink
                theme={AppLinkTheme.PRIMARY}
                to="/about"
                className={cls.mainLink}
            >
                {
                    // eslint-disable-next-line i18next/no-literal-string
                    'О нас'
                }
            </AppLink>
        </div>
    </div>
);
