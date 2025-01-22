
import { createTheme } from '@mui/material';

const theme = createTheme({
    components: {
        MuiContainer: {
            defaultProps: {
                disableGutters: true,
                spacing: 8
            },
        },
    },
});

export default theme;
