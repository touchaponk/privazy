import React from 'react';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Styles from '../../jss/layouts/main/TopbarStyle';
import {
    AppBar,
    Badge,
    IconButton,
    Toolbar,
    Hidden,
    Avatar,
    Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';

const useStyles = makeStyles(Styles);

interface IProps {
    className: string;
    onOpenNavBar: () => any;
}

const Topbar: React.FC<IProps> = ({ className, onOpenNavBar }) => {
    const classes = useStyles();
    return (
        <AppBar className={clsx(classes.root, className)}>
            <Toolbar>
                <RouterLink to="/">
                    <img
                        alt="Logo"
                        src="/assets/images/logo/logo.png"
                        className={classes.logo}
                    />
                </RouterLink>
                <IconButton onClick={onOpenNavBar}>
                    <MenuIcon />
                </IconButton>
                <div className={classes.flexGrow} />
                <Hidden mdDown>
                    <IconButton
                        className={classes.notificationsButton}
                    >
                        <Badge
                            badgeContent={4}
                            color="secondary"
                        >
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <Avatar className={classes.avatar}>S</Avatar>
                    <Typography className={classes.username}>Business name</Typography>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;