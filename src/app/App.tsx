import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';
import { classNames } from '../shared/config/lib/classNames/classNames';
import './styles/index.scss';

export function App() {
    const { theme } = useTheme();

    useEffect(() => {
        if (Math.random() < 0.5) {
            throw new Error('error');
        }
    }, []);

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
