import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/config/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test.skip('first', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test.skip('test otggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(sidebar).toHaveClass('collapsed');
    });
});
