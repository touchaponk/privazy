import { createStyles, Theme } from '@material-ui/core/styles';
// import { colors } from '@material-ui/core';

const Styles = (theme: Theme) =>
    createStyles({
        root: {
            boxShadow: "0 8px 10px 0 rgba(0, 0, 0, 0.07)",
            backgroundColor: "#ffffff",
        },
        logo: {
            width: "150px",
            height: "40px"
        },
        flexGrow: {
            flexGrow: 1
        },
        notificationsButton: {
            marginLeft: theme.spacing(1)
        },
        avatar: {
            marginLeft: "5px",
            backgroundColor: "#a32431"
        },
        username: {
            color: "#273142",
            marginLeft: "5px"
        }
    });

export default Styles;