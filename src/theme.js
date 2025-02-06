
import { createTheme } from '@mui/material';

const theme = createTheme({
    components: {
        MuiContainer: {
            defaultProps: {
                disableGutters: true,
                spacing: 8,
                maxWidth: false,
            },
        },
    },
    typography: {
        fontFamily: 'Manrope',
        fontWeightLight: 400,
        h1: {
            fontSize: '64px',
        },
        h2: {
            fontSize: '60px',
            fontWeight: 500
        },
        h3: {
            fontSize: '56px',
        },
        h4: {
            fontSize: '36px',
        },
        h5: {
            fontSize: '24px',
        },
        body1: {
            fontSize: '20px',
        },
        body2: {
            fontSize: '16px',
        },
        body3: {
            fontSize: '14px',
        }
    },
    breakpoints: {
        // TODO: use or remove
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default theme;
