import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/config/lib/classNames/classNames';
import cls from './AppLink.module.scss';

/* eslint-disable no-unused-vars */
export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}
/* eslint-disable no-unused-vars */

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme
}

export const AppLink = (props: AppLinkProps) => {
    const {
        to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        >
            {children}
        </Link>
    );
};
