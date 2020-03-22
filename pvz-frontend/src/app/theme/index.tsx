import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Montserrat',
        ].join(','),
    },
});
theme = responsiveFontSizes(theme);

export default theme;
