import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    loginForm: { username: '123', password: '123', isLoading: false },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: '123', password: '123', isLoading: false },
})];

export const NavbarAuthenticated = Template.bind({});
NavbarAuthenticated.args = {};
NavbarAuthenticated.decorators = [StoreDecorator({
    user: { authData: {} },
})];

export const NavbarAuthenticatedDark = Template.bind({});
NavbarAuthenticatedDark.args = {};
NavbarAuthenticatedDark.decorators = [StoreDecorator(
    {
        user: { authData: {} },
    },
),
ThemeDecorator(Theme.DARK),
];
