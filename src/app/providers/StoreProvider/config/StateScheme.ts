import { CounterScheme } from 'entities/Counter';
import { UserScheme } from 'entities/User';
import { LoginScheme } from 'features/AuthByUsername';

export interface CounterState {
    // value: number
}

export interface StateScheme {
    counter: CounterScheme
    user: UserScheme
    loginForm?: LoginScheme
}
