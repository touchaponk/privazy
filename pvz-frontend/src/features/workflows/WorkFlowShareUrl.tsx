import React, { Fragment } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, InputBase, Box, InputAdornment } from '@material-ui/core';
import CardWorkFlow from '../../app/components/CardWorkFlow/CardWorkFlow';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        topic: {
            fontSize: theme.typography.h5.fontSize,
            fontWeight: "bold"
        },
        subtopic: {
            color: "#a32431",
            fontSize: theme.typography.h6.fontSize,
            fontWeight: "bold"
        },
        input: {
            borderColor: "#a2acba",
            borderWidth: '0px 0px 2px 0px',
            borderStyle: 'double'
        },
        copyIcon: {
            "&:hover": {
                cursor: "pointer"
            }
        }
    }),
);

const WorkFlowShareUrl: React.FC = () => {
    return (
        <Fragment>
            <Box><UrlSection /></Box>
        </Fragment>
    );
};

const UrlSection: React.FC = () => {
    const classes = useStyles();

    const topic =
        <Typography className={classes.topic}>Here is the URL to the Work flow for:
            <span className={classes.subtopic}>
                &nbsp;On-boarding
            </span>
        </Typography>;

    const children = <InputBase
        fullWidth
        className={classes.input}
        endAdornment={<InputAdornment position="end" className={classes.copyIcon}><i className="far fa-copy"></i></InputAdornment>}
    />

    return (
        <CardWorkFlow topic={topic} children={children} />
    );
}

export default WorkFlowShareUrl;