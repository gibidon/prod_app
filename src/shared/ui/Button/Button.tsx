import { classNames } from 'shared/config/lib/classNames/classNames';
import React, { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

/* eslint-disable no-unused-vars */
export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'

}
/* eslint-disable no-unused-vars */

/* eslint-disable no-unused-vars */
export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  children: React.ReactNode
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        theme = ButtonTheme.CLEAR,
        children,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            // eslint-disable-next-line
            {...otherProps}
        >
            {children}
        </button>
    );
};
