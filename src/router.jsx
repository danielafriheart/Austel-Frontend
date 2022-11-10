import {createTheme, ThemeProvider} from '@mui/material/styles';
import React from 'react'
import App from './App'

const theme = createTheme({
	palette: {
		primary: {
			main: '#0FA958',
		},
	},
	components: {
		MuiCheckbox: {
			styleOverrides: {
				root: {
				}
			}
		}
	}
});

export default function AppRouter() {
	return (
		<ThemeProvider theme={theme}><div><App /></div></ThemeProvider>
	)
}
