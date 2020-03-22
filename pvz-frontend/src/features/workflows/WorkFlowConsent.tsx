import React, { Fragment } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, Card, Button, Box, InputBase, TextField, Checkbox, InputAdornment } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PerfectScrollbar from 'react-perfect-scrollbar';
import CardWorkFlow from '../../app/components/CardWorkFlow/CardWorkFlow';
import 'react-perfect-scrollbar/dist/css/styles.css';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        topic: {
            fontSize: theme.typography.h5.fontSize,
            fontWeight: "bold"
        },
        workflowName: {
            color: "#a32431"
        },
        inner: {
            width: "100%",
        },
        root: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        header: {

        },
        content: {

        },
        btnAdd: {
            color: "#263956"
        },
        startText: {
            color: "#30486f"
        },
        input: {
            color: "#1f2d41",
            borderColor: "rgba(143, 150, 160, 0.5)",
            borderWidth: '0px 0px 2px 0px',
            borderStyle: 'dashed',
            fontWeight: "bold",
        },
        card: {
            border: "solid 0.5px #1f2d41",
            width: "100%",
            padding: theme.spacing(3),
            display: 'flex',
            alignItems: 'center',
        }
    })
);

const WorkFlowConsent: React.FC = () => {
    return (
        <Fragment>
            <ConsentListSection />
        </Fragment>
    );
}

const ConsentListSection: React.FC = () => {
    const classes = useStyles();

    const topic = <Typography className={classes.topic}>Add your required Consent :  <span className={classes.workflowName}>On-boarding</span></Typography>;
    const children = <ConsentDetail />

    return (
        <CardWorkFlow topic={topic} children={children} />
    );
}

const ConsentDetail: React.FC = () => {
    const classes = useStyles();

    const consentList = [
        { title: 'Name' },
        { title: 'Photo' },
        { title: 'Login-Records' },
        { title: 'Cookies' }
    ];
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <PerfectScrollbar>
                    <div className={classes.inner}>
                        <Typography >
                            Please kindly be informed that in addition to the data processing defined in the Privacy Statement, we would like to also process your personal data for these specific purposes.
                            It is your free choice to choose whether or not you would like to give the consent to us to do these following activities.
                            It should be noted that you are entitled to withdraw the consent that you gave at any time by following the procedures defined in the Policy Statement
                    </Typography>
                    </div>
                </PerfectScrollbar>

            </div>
            <div className={classes.content}>
                <Box mt={2}>
                    <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
                        <Grid item>
                            <Typography>
                                Consent list
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" className={classes.btnAdd}>
                                <i className="fas fa-plus"></i> &nbsp;Add New Consent
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={2}>
                    <Card className={classes.card}>
                        <Grid container>
                            <Grid item xs={12}>
                                <InputBase
                                    fullWidth
                                    className={classes.input}
                                    value="&nbsp;Cookies for better quality of service"
                                    startAdornment={<InputAdornment position="start" className={classes.startText}>Title :</InputAdornment>}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputBase
                                    fullWidth
                                    rows={2}
                                    rowsMin={2}
                                    className={classes.input}
                                    value="&nbsp;Persistent cookies are used in our business platform in order to get your insight for better improvement of our service operation. Cookies will be expired in 12 months."
                                    startAdornment={<InputAdornment position="start" className={classes.startText}>Description :</InputAdornment>}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputBase
                                    fullWidth
                                    value="&nbsp;"
                                    startAdornment={<InputAdornment position="start" className={classes.startText}>Relate to </InputAdornment>}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    multiple
                                    options={consentList}
                                    disableCloseOnSelect
                                    getOptionLabel={option => option.title}
                                    renderOption={(option, { selected }) => (
                                        <React.Fragment>
                                            <Checkbox
                                                icon={icon}
                                                checkedIcon={checkedIcon}
                                                style={{ marginRight: 8 }}
                                                checked={selected}
                                            />
                                            {option.title}
                                        </React.Fragment>
                                    )}
                                    style={{ width: '100%' }}
                                    renderInput={params => (
                                        <TextField {...params} variant="outlined" placeholder="Consent" />
                                    )}
                                />
                            </Grid>
                        </Grid>
                    </Card>
                </Box>
            </div>
        </div>
    );
};

export default WorkFlowConsent;