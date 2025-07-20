import { Routes, Route, Link } from "react-router-dom";
import { Counter } from "./Counter";
import { AboutPageAsync } from "../pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "../pages/MainPage/MainPageAsync";
import { Suspense } from "react";
import './index.scss'

export function App() {
    return <div className="app">
        <Link to={'/about'}>About</Link>
        <Link to={'/main'}>Main</Link>
        <Suspense fallback='Loading'>
            <Routes>
                <Route path={'/about'} element={<AboutPageAsync />}/>
                <Route path={'/main'} element={<MainPageAsync />}/>
            </Routes>
        </Suspense>
        <Counter />
    </div>
}