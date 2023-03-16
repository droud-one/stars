import React, { ReactNode } from 'react';
import { Link as GLink } from 'gatsby';
import "@fontsource/roboto";
import "@fontsource/lexend";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Link from '@mui/material/Link';
import Fade from '@mui/material/Fade';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteOptions } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

type Props = {
    children: ReactNode,
};

const lightPalette: PaletteOptions = {
    mode: 'light',
    primary: {
      main: '#5296a5',
    },
    secondary: {
      main: '#2a1a1f',
    },
    success: {
      main: '#7fa278',
    },
    warning: {
      main: '#bfae48',
    },
    error: {
      main: '#a85547',
    },
    info: {
      main: '#79b6e4',
    },
};
const darkPalette: PaletteOptions = {
    mode: 'dark',
    primary: {
      main: '#9ccbd6',
    },
    secondary: {
      main: '#c59881',
    },
    success: {
      main: '#74ad67',
    },
    warning: {
      main: '#c58c20',
    },
    error: {
      main: '#d24a33',
    },
    info: {
      main: '#4d94c9',
    },
    text: {
      primary: '#e8e8e8',
    },
    background: {
      default: '#141414',
      paper: '#1a1918',
    },
};

const themeOptions: ThemeOptions = {
  palette: {},
  typography: {
    fontFamily: 'Lexend, Roboto, sans-serif',
    fontWeightLight: 300,
    fontSize: 16,
    h1: {
      fontSize: '5rem',
      lineHeight: 1.25,
    },
    h2: {
      fontSize: '4rem',
    },
    h3: {
      fontSize: '3.3rem',
    },
    h4: {
      fontSize: '2.5rem',
    },
    h5: {
      fontSize: '1.8rem',
      lineHeight: 1.33,
    },
    h6: {
      fontSize: '1.5rem',
    },
    subtitle1: {
      fontSize: '1.2rem',
    },
    subtitle2: {
      fontSize: '1.1rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      lineHeight: 1.2,
    },
    button: {
      fontSize: '1.1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.8rem',
      fontWeight: 400,
    },
    overline: {
      fontSize: '0.9rem',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
};

function ScrollTop({ children }: Props) {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log('clicked');
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
                behavior: 'smooth',
            });
        }
    };
  
    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Fade>
    );
}

export default function Layout({ children }: Props) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(() => createTheme({ 
            ...themeOptions, 
            palette: prefersDarkMode ? darkPalette : lightPalette,
        }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar variant="dense" id="back-to-top-anchor">
                    <Typography variant="h6" color="inherit" component="div">
                        <Link component={GLink} to="/" underline="none">STAR tracker</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>{children}</Container>
            <ScrollTop>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </ThemeProvider>
    );
  }