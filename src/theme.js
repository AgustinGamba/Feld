import { createTheme } from '@mui/material';

const baseTheme = createTheme();

const theme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
        maxWidth: false,
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiInputBase-input": {
            color: "#FFFFFF",
            fontSize: "16px",
            // TODO: Adjust width based on screen size (is 150 enough?)
            minWidth: "180px",
            [theme.breakpoints.down("sm")]: {
              minWidth: "150px",
            },
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
        }),
      },
    },
  },
  typography: {
    fontFamily: 'Manrope',
    fontWeightLight: 400,
    h1: {
      fontSize: '64px',
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: '36px',
      },
    },
    h2: {
      fontSize: '60px',
      fontWeight: 500,
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: '34px',
      },
    },
    h3: {
      fontSize: '56px',
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: '42px',
      },
    },
    h4: {
      fontSize: '36px',
    },
    body1: {
      fontSize: '20px',
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: '18px',
      },
    },
    body2: {
      fontSize: '16px',
    },
  }
});

export default theme;