import { CounterScheme } from 'entities/Counter';
import { UserScheme } from 'entities/User';

export interface CounterState {
    // value: number
}

export interface StateScheme {
    counter: CounterScheme
    user: UserScheme
}
