import { ReactNode, useMemo, useState } from "react"
import { Theme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from "app/providers/ThemeProvider/lib/ThemeContext"

interface ThemeProviderProps {
    children: ReactNode
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }),[theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider }