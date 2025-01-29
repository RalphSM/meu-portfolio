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
        fontFamily: "Helvetica Neue",
        h1: {
            fontFamily: "Cinzel",
            fontSize: "83px" 
        },

        h2: {
            fontFamily: "Cinzel",
            fontSize: "48px" 
        },

        h3: {
            fontFamily: "Alumni Sans Pinstripe",
            fontWeight: 800 
        },
    }
});

theme = responsiveFontSizes(theme);

export default theme; 