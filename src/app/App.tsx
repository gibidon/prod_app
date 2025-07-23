import { classNames } from "../shared/config/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/Sidebar";
import './styles/index.scss'
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

export function App() {
    const { theme } = useTheme()
  
    return (
        <div className={classNames('app',{},[theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter /> 
                </div>
            </Suspense>
        </div>)
}