import { classNames } from "../shared/config/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/Sidebar";
import './styles/index.scss'


export function App() {
    const { theme } = useTheme()
  
    return (
        <div className={classNames('app',{},[theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter /> 
            </div>
        </div>)
}