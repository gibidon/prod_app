// import { classNames } from './classNames';
import { classNames } from 'shared/config/lib/classNames/classNames';

describe('', () => {
    test('basic', () => {
        expect(2 + 2).toBe(4);
    });

    test('cn', () => {
        expect(classNames('some')).toBe('some');
    });

    test('cn with added params', () => {
        const expected = 'some added';
        expect(classNames('some', {}, ['added'])).toBe(expected);
    });

    test('cn with mods', () => {
        const expected = 'some hovered';
        expect(classNames('some', { hovered: true, focused: false }, []))
            .toBe(expected);
    });

    test('cn with udefined mod', () => {
        const expected = 'some';
        expect(classNames('some', { hovered: undefined }, [])).toBe(expected);
    });
});
