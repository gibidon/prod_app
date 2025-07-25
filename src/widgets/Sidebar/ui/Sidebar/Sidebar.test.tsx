import { fireEvent, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { renderWithtranslation } from 'shared/config/lib/tests/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('first', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        renderWithtranslation(<SidebarWithTranslation />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        // screen.debug();
    });
    test('test otggle', () => {
        renderWithtranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(sidebar).toHaveClass('collapsed');
    });
});
