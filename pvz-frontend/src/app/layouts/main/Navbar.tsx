import React, { Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Hidden, Paper } from '@material-ui/core';
import { Navigation } from '../../components';
import Styles from '../../jss/layouts/main/NavbarStyle';
import navigationConfig from './navigationConfig';

const useStyles = makeStyles(Styles);

interface IProps {
    className: string;
    openNavBar: boolean;
    onOpenNavBar: () => any;
}

const Navbar: React.FC<IProps> = ({ className, openNavBar, onOpenNavBar }) => {
    const classes = useStyles();

    const navbarContent = (
        <div className={classes.content}>
            <nav className={classes.navigation}>
                {navigationConfig.map(list => (
                    <Navigation
                        component="div"
                        key={list.title}
                        pages={list.pages}
                        title={list.title}
                    />
                ))}
            </nav>
        </div>
    );

    return (
        <Fragment>
            <Hidden lgUp>
                <Drawer
                    anchor="left"
                    onClose={onOpenNavBar}
                    open={openNavBar}
                    variant="temporary"
                >
                    <div
                        className={clsx(classes.root, className)}
                    >
                        {navbarContent}
                    </div>
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <Paper
                    className={clsx(classes.root, className)}
                    elevation={1}
                    square
                >
                    {navbarContent}
                </Paper>
            </Hidden>
        </Fragment>
    );
}

export default Navbar;

