import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import type { Story } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StateScheme>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);
