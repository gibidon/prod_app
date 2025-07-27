import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('has clear class', () => {
        render(<Button theme={ButtonTheme.CLEAR}>text</Button>);
        expect(screen.getByText('text')).toHaveClass('clear');
        screen.debug();
    });
});
