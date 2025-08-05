import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import type { Story } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

export const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateScheme>> = {
    loginForm: loginReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateScheme>,
    asyncReducers: DeepPartial<ReducersMapObject<StateScheme>>,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
