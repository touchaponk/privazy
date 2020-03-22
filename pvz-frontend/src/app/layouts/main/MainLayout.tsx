import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Styles from '../../jss/layouts/main/MainStyle';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles(Styles);

const MainLayout: React.FC = () => {
    const classes = useStyles();
    const [openNavBar, setOpenNavBar] = useState(false);

    const handleNavBarOpen = () => {
        setOpenNavBar(true);
    };

    const handleNavBarClose = () => {
        setOpenNavBar(false);
    };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Topbar className={classes.topBar} onOpenNavBar={handleNavBarOpen} />
            <div className={classes.container}>
                <Navbar
                    className={classes.navBar}
                    openNavBar={openNavBar}
                    onOpenNavBar={handleNavBarClose}
                />
                <main className={classes.content}>

                </main>
            </div>
        </div>
    );
};

export default MainLayout;