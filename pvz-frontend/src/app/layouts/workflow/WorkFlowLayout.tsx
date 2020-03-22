import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Styles from '../../jss/layouts/workflow/WorkFlowStyle';
import { Container, CssBaseline, Grid, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles(Styles);

interface IProps {
    children: React.ReactNode
}

const WorkFlowLayout: React.FC<IProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container disableGutters maxWidth="xl">
                <div className={classes.root}>
                    <div className={classes.container}>
                        <Grid container direction="row">
                            <Grid container item xs={12} justify="center">
                                <picture>
                                    <source media="(min-width: 1280px)" srcSet="/assets/images/logo/logo.png" />
                                    <source media="(min-width: 960px)" srcSet="/assets/images/logo/logo.png" />
                                    <img src="/assets/images/logo/logo.png" alt="brandlogo" className={classes.logo} />
                                </picture>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography component="div" className={classes.text}>
                                    <Box>Data Privacy Management Platform for corporates who want to</Box>
                                    <Box>take on compliance with ease</Box>
                                </Typography>
                            </Grid>
                        </Grid>
                        <main>
                            <Grid container direction="row">
                                <Grid item xs></Grid>
                                <Grid item xs={10} md={8}>
                                    <Box mt={6}>
                                        {children}
                                    </Box>
                                </Grid>
                                <Grid item xs></Grid>
                            </Grid>
                        </main>
                    </div>
                </div>
                <Typography className={classes.footer}>© 2020 by Privazy Co., Ltd.</Typography>
            </Container>
        </React.Fragment>
    );
}

export default WorkFlowLayout;