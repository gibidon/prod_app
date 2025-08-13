import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return correct value', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                password: '12345',
            },
        };

        expect(getLoginPassword(state as StateScheme)).toEqual('12345');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = {};

        expect(getLoginPassword(state as StateScheme)).toEqual('');
    });
});
