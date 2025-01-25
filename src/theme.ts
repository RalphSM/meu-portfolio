import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
        main: '#222222'
        },
        secondary: {
        main: '#275D2C',
        },
    },

    typography: {
        fontFamily: "Helvetica Neue"
    }
});

theme = responsiveFontSizes(theme);

export default theme; 