import { createStyles, Theme } from '@material-ui/core/styles';

const Styles = (theme: Theme) =>
    createStyles({
        root: {
            height: '100vh',
            width: '100%',
            backgroundColor: "rgba(31, 45, 65, 0.05)",
            backgroundImage: "url('/assets/images/workflows/bg-tran@2x.png')",
            backgroundSize: "auto 100%",
            backgroundRepeat: " no-repeat",
            backgroundPosition: "bottom"
        },
        container: {

        },
        logo: {
            marginTop: theme.spacing(6)
        },
        text: {
            textAlign: "center",
            marginTop: theme.spacing(3),
            fontSize: "15px",
            color: "#1f2d41"
        },
        footer: {
            position: "absolute",
            bottom: "0",
            left: "0",
            color: "#ffff",
            marginBottom: "10px"
        }
    });

export default Styles;