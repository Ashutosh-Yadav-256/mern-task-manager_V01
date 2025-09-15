import React, { createContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ThemeContext = createContext({
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const theme = useMemo(() => createTheme({
        palette: {
            mode,
            ...(mode === 'light'
              ? {
                  primary: { main: '#1976d2' },
                  background: { default: '#f4f6f8', paper: '#ffffff' },
                }
              : {
                  primary: { main: '#90caf9' },
                  background: { default: '#121212', paper: '#1e1e1e' },
                }),
        },
    }), [mode]);

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
