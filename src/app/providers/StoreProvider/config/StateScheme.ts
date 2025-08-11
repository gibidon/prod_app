import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterScheme } from 'entities/Counter';
import { ProfileScheme } from 'entities/Profile';
import { UserScheme } from 'entities/User';
import { LoginScheme } from 'features/AuthByUsername';

export interface CounterState {
    // value: number
}

export interface StateScheme {
    counter: CounterScheme
    user: UserScheme

    // async reducers
    loginForm?: LoginScheme
    profile?: ProfileScheme
}

export type StateSchemeKey = keyof StateScheme

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateScheme>
    reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>
    add: (state: StateSchemeKey, reducer: Reducer) => void
    remove: (key: StateSchemeKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
    reducerManager: ReducerManager
}
