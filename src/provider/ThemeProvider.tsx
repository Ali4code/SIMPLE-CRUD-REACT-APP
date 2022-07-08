import React from 'react';
import { Global, css } from '@emotion/react';

import { createTheme } from '@mui/material/styles';

import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1300
        }
    },
    palette: {
        common: { black: '#191A23', white: '#FFFFFF' },
        primary: {
            main: '#1e96fc',
            light: '#6A9DCE',
            dark: '#213958',
            contrastText: '#fff'
        },
        secondary: {
            main: '#01294b',
            light: '#FAC8BB',
            contrastText: '#707070'
        },
        //this is gray not the grey in mui theme,

        gray: {
            main: '#ECEEEE',
            light: '#F7F7F7'
        },
        status: {
            blue: { main: '#00B6D7' },
            turquoise: { main: '#00B6D7' },
            red: { main: '#FF4F4D' },
            success: { main: '#06D6A0' }
        },
        effects: {
            light: 'rgb(248, 179, 112,0.5)'
        },
        gradient: {
            primary: 'linear-gradient(90deg, hsla(30, 68%, 61%, 1) 0%, hsla(30, 58%, 70%, 1) 100%);'
        },
        orange: {
            main: '#FB8500'
        },
        error: { main: '#06D6A0' }
    },
    typography: {
        useNextVariants: true,
        allVariants: {
            color: '#FFF'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '10'
                }
            }
        },
    }
} as any);

interface Props {
    children: React.ReactNode;
}

export default function AppThemeProvider({ children }: Props) {
    return (
        <>
            <CssBaseline />
            <Global
                styles={css`
                    * {
                        box-sizing: border-box;
                    }

                    html,
                    body {
                        width: 100%;
                        height: 100%;
                        min-height: 100%;
                        padding: 0;
                        margin: 0;
                    }
                `}
            />
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </>
    );
}
