import { classNames } from 'shared/config/lib/classNames/classNames';
import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
    const {
        className, value, onChange, type = 'text', ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            <input
                className={cls.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...otherProps}
            />
        </div>
    );
});
