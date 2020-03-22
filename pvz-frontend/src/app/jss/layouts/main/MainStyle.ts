import { createStyles, Theme } from '@material-ui/core/styles';

const Styles = (theme: Theme) =>
    createStyles({
        root: {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
        },
        topBar: {
            zIndex: 3,
            position: 'relative'
        },
        container: {
            display: 'flex',
            flex: '1 1 auto',
            overflow: 'hidden'
        },
        navBar: {
            zIndex: 2,
            width: 256,
            minWidth: 256,
            flex: '0 0 auto',
            height: '100vh'
        },
        content: {
            overflowY: 'auto',
            flex: '1 1 auto'
        }
    });

export default Styles;