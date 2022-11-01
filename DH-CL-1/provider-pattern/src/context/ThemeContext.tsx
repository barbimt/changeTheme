import {createContext, ReactNode, useState, FC} from 'react';

interface ThemeProviderProps {
	children: ReactNode;
} 

interface ThemeContextProps {
	theme: "light" | "dark"
	toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider: FC<ThemeProviderProps> = ({children}: any) => {
	const [theme, setTheme] = useState<"light" | "dark">("light")
 

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark": "light")
	}

	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}> 		
			{children}
		</ThemeContext.Provider>

	)
}