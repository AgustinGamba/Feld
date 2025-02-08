
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
        MuiTextField: {
            defaultProps: {
                variant: "standard",
            },
            styleOverrides: {
                root: {
                    "& .MuiInputBase-input": {
                        color: "#FFFFFF",
                        fontSize: "16px",
                        // TODO: Adjust width based on screen size
                        minWidth: "180px"
                    },
                    "& .MuiInputLabel-root": {
                        color: "#FFFFFF",
                        fontSize: "18px",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "#FFFFFF",
                    },
                    "& .MuiInputLabel-root.MuiInputLabel-shrink": {
                        fontSize: "14px",
                    },
                    "& .MuiInput-underline:before": {
                        borderBottomColor: "#FFFFFF",
                        opacity: 0.7,
                    },
                    "& .MuiInput-underline:hover:before": {
                        borderBottomColor: "#FFFFFF !important",
                        opacity: 1,
                    },
                    "& .MuiInput-underline:after": {
                        borderBottomColor: "#FFFFFF",
                    },
                },
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
