import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../styles/themes/lightTheme";
import { darkTheme } from "../styles/themes/darkTheme";
import GlobalStyles from "../styles/GlobalStyles";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");

	// Função para alternar o tema
	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	// Seleciona o tema baseado no estado
	const themeMode = theme === "light" ? lightTheme : darkTheme;

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<ThemeProvider theme={themeMode}>
				<GlobalStyles />
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
