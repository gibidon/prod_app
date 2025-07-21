import { Routes, Route, Link } from "react-router-dom";
import { Counter } from "./components/Counter";
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";
import './styles/index.scss'

export function App() {
    const { theme, toggleTheme } = useTheme()
  
    return <div className={classNames('app',{},[theme])}>
        <button onClick={toggleTheme}>toggle theme</button>
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