import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateScheme } from '../config/StateScheme';

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateScheme>
  asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
    const store = createReduxStore(initialState as StateScheme, asyncReducers as ReducersMapObject<StateScheme>);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
