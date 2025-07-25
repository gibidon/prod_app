import { classNames } from 'shared/config/lib/classNames/classNames';
import React, { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

/* eslint-disable no-unused-vars */
export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}
/* eslint-disable no-unused-vars */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  children: React.ReactNode
  theme?: ThemeButton
}

export const Button = (props: ButtonProps) => {
    const {
        className, theme = ThemeButton.CLEAR, children, ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            // eslint-disable-next-line
            {...otherProps}
        >
            {children}
        </button>
    );
};
