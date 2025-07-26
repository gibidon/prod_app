import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';
// import 'app/styles/index.scss';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};

export const Outlined = Template.bind({});

Outlined.args = {
    children: 'text',
    theme: ThemeButton.OUTLINE,
};
Outlined.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OulinedDark = Template.bind({});

OulinedDark.args = {
    children: 'text dark',
    theme: ThemeButton.OUTLINE,
};
OulinedDark.decorators = [ThemeDecorator(Theme.DARK)];
