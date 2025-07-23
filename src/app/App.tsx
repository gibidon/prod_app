import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';
import { classNames } from '../shared/config/lib/classNames/classNames';
import './styles/index.scss';

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
