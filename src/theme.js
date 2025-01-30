
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
        h1: {
            fontSize: '64px',
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
