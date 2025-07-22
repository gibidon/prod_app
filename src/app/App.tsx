import { Routes, Route, Link } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { classNames } from "../shared/config/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import './styles/index.scss'
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";

export function App() {
    const { theme, toggleTheme } = useTheme()
  
    return (
        <div className={classNames('app',{},[theme])}>
            <Navbar />
            <AppRouter /> 
        </div>)
}