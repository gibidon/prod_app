import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('should do something', () => {
        const state: DeepPartial<StateScheme> = {
            counter: { value: 1 },
        };
        expect(getCounterValue(state as StateScheme)).toEqual(1);
    });
});
