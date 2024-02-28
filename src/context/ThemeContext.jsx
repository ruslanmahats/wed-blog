'use client';

import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children, themeCookie }) => {
	const [theme, setTheme] = useState(themeCookie);

	useEffect(() => {
		document.cookie = `theme=${theme}`;
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
