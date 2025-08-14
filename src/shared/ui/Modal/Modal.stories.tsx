import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
    const rootEl = document.getElementById('root') || undefined;
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Modal {...args} target={rootEl} />;
};

export const Primary = Template.bind({});
Primary.args = {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolor omnis possimus voluptates commodi, quod voluptatem nesciunt ipsum placeat blanditiis.',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolor omnis possimus voluptates commodi, quod voluptatem nesciunt ipsum placeat blanditiis.',
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
