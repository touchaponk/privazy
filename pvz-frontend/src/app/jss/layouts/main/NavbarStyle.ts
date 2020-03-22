import { createStyles, Theme } from '@material-ui/core/styles';
// import { colors } from '@material-ui/core';

const Styles = (theme: Theme) =>
    createStyles({
        root: {
            height: '100%',
            overflowY: 'auto'
        },
        content: {
            padding: theme.spacing(2)
        },
        navigation: {
            marginTop: theme.spacing(2)
        }
    });

export default Styles;