import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Text',
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'text',
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    children: 'text',
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    children: 'text',
    size: 'small',
    label: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
};

export const OulinedDark = Template.bind({});
OulinedDark.args = {
    children: 'text dark',
    theme: ButtonTheme.OUTLINE,
};
OulinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedSizeM = Template.bind({});
OutlinedSizeM.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
};

export const OutlinedSizeL = Template.bind({});
OutlinedSizeL.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlinedSizeXL = Template.bind({});
OutlinedSizeXL.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'text',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};
