import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUserName';

describe('getLoginUserame', () => {
    test('should return value', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                username: '123123',
            },
        };
        expect(getLoginUsername(state as StateScheme)).toEqual('123123');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};

        expect(getLoginUsername(state as StateScheme)).toEqual('');
    });
});
