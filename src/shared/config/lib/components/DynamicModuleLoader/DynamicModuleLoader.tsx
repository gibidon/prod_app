import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemeKey } from 'app/providers/StoreProvider/config/StateScheme';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemeKey]?: Reducer
}

type ReducersListEntry = [StateSchemeKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    children: ReactNode
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        reducers, removeAfterUnmount = false, children,
    } = props;

    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]:ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, ,]:ReducersListEntry) => {
                    store.reducerManager.remove(name);
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            { children }
        </div>
    );
};
