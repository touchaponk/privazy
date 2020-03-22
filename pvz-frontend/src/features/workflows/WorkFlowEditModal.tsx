import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
    Button,
    Dialog,
    Grid,
    Typography,
    colors,
    Box
} from '@material-ui/core';
import WorkFlowEditCard from './WorkFlowEditCard';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 960
        },
        header: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
        },
        content: {
            paddingLeft: theme.spacing(8),
            paddingRight: theme.spacing(8),
        },
        actions: {
            backgroundColor: colors.grey[100],
            padding: theme.spacing(2),
            display: 'flex',
            justifyContent: 'center'
        },
        icon: {
            color: "#a32431",
            fontSize: theme.typography.h5.fontSize,
            fontWeight: "bold"
        },
        topic: {
            width: "100%"
        },
        wrapper: {
            margin: theme.spacing(1),
            position: "relative"
        },
        btnSave: {
            backgroundColor: "#a32431",
            "&:hover": {
                backgroundColor: "#a32431",
            }
        }
    }),
);

interface IProps {
    open: boolean;
    onClose: () => any;
}

const WorkFlowEditModal: React.FC<IProps> = ({ open, onClose }) => {
    const classes = useStyles();

    return (
        <Dialog
            maxWidth="lg"
            onClose={onClose}
            open={open}
        >
            <PerfectScrollbar>
                <div className={classes.root}>
                    <div className={classes.header}>
                        <Box display="flex" justifyContent="flex-start" m={1} p={1}>
                            <Box p={1} >
                                <span className={classes.icon}>
                                    <i className="fas fa-arrow-right" />
                                </span>
                            </Box>
                            <Box p={1} className={classes.topic}>
                                <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
                                    <Grid item>
                                        <Typography className={classes.topic} component="div">
                                            Name
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography >
                                            All fields are required*
                                    </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="flex-start" m={1} p={1}>
                            <Box p={1} >
                                &nbsp;&nbsp;
                        </Box>
                            <Box p={1} className={classes.topic}>
                                <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
                                    <Grid item>
                                        <Typography className={classes.topic} component="div">
                                            Permitted Access Person
                                    </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined">
                                            <i className="fas fa-plus"></i> &nbsp;Add Person
                                    </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </div>
                    <div className={classes.content}>
                        <Grid container direction="row" spacing={2}>
                            <Grid item xs={12}>
                                <WorkFlowEditCard />
                            </Grid>
                            <Grid item xs={12}>
                                <WorkFlowEditCard />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.actions}>
                        <Box display="flex" justifyContent="center">
                            <Box p={1}>
                                <div className={classes.wrapper}>
                                    <Button
                                        size="large"
                                        variant="outlined"
                                    //onClick={e => handleClose(false, null)}
                                    >
                                        Close
                                    </Button>
                                </div>
                            </Box>
                            <Box p={1}>
                                <div className={classes.wrapper}>
                                    <Button
                                        color="primary"
                                        //disabled={(!formState.isValid && !loading) || loading}
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        className={classes.btnSave}
                                    //className={buttonClassname}
                                    >
                                        Save
                                    </Button>
                                    {/* {loading && (
                                        <CircularProgress
                                            size={24}
                                            className={classes.buttonProgress}
                                        />
                                    )} */}
                                </div>
                            </Box>
                        </Box>
                    </div>
                </div>
            </PerfectScrollbar>
        </Dialog>
    );
}

export default WorkFlowEditModal;