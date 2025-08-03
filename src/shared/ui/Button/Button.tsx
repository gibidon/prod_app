import { classNames } from 'shared/config/lib/classNames/classNames';
import React, { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

/* eslint-disable no-unused-vars */
export enum ButtonTheme {
   CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
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
  disabled?: boolean
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        theme = ButtonTheme.CLEAR,
        children,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            disabled={disabled}
            // eslint-disable-next-line
            {...otherProps}
        >
            {children}
        </button>
    );
};
