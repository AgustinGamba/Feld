
import { createTheme } from '@mui/material';

const theme = createTheme({
    components: {
        MuiContainer: {
            defaultProps: {
                disableGutters: true,
                maxWidth: 100,
                spacing: 8
            },
        },
    },
});

export default theme;
