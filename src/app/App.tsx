import { Routes, Route, Link } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { classNames } from "../shared/config/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import './styles/index.scss'
import { AppRouter } from "./providers/router";

export function App() {
    const { theme, toggleTheme } = useTheme()
  
    return <div className={classNames('app',{},[theme])}>
        <button onClick={toggleTheme}>toggle theme</button>
        <Link to={'/about'}>About</Link>
        <Link to={'/main'}>Main</Link>
        <Suspense fallback='Loading'>
           <AppRouter /> 
        </Suspense>
    </div>
}