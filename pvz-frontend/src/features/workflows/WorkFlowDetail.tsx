import React, { useState, Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box, Button } from '@material-ui/core';
import CardWorkFlow from '../../app/components/CardWorkFlow/CardWorkFlow';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            fontSize: "16px",
            color: "#1f2d41"
        },
        subtitle: {
            fontSize: "13px",
            color: "#1f2d41",
            fontStyle: "italic"
        },
        topic: {
            fontSize: theme.typography.h5.fontSize,
            fontWeight: "bold"
        },
        btnSection: {
            '& > *': {
                margin: theme.spacing(1),
            },
            fontSize: "11px",
            color: "#1f2d41"
        },
        btn: {
            border: "solid 0.5px #1f2d41",
            borderRadius: "3.5px"
        },
        active: {
            backgroundColor: "rgba(31, 45, 65, 0.1)"
        }
    }),
);

const WorkFlowDetail: React.FC = () => {
    return (
        <Fragment>
            <Box mb={6}><WorkFlowSection /></Box>
        </Fragment>
    );
};

const WorkFlowSection: React.FC = () => {
    const classes = useStyles();
    const [workflows, setWorkFlows] = useState([
        {
            value: 1,
            label: 'Customer Leads',
            selected: false
        },
        {
            value: 2,
            label: 'On-boarding',
            selected: false
        },
        {
            value: 3,
            label: 'Transaction',
            selected: false
        },
        {
            value: 4,
            label: 'Marketing Campaign',
            selected: false
        },
        {
            value: 5,
            label: 'Event and Training',
            selected: false
        },
        {
            value: 6,
            label: 'Data Analytic',
            selected: false
        },
        {
            value: 7,
            label: 'External Transfer',
            selected: false
        },
        {
            value: 8,
            label: 'Cookies and Online Identifier',
            selected: false
        }
    ]);

    const handleSelect = (index: number) => {
        let oldIndex = workflows.findIndex(x => x.selected === true);
        let newValues = [...workflows];

        if (oldIndex !== -1) newValues[oldIndex].selected = false;

        newValues[index].selected = true;

        setWorkFlows(newValues);
    }

    const title = <Typography className={classes.title}>"Here are the <b>suggested workflows for your industry</b>"</Typography>;
    const subtitle = <Typography className={classes.subtitle}>Please feel free to edit or add as appropriate</Typography>;
    const topic = <Typography className={classes.topic}>Add workflows to Customer</Typography>;
    const children =
        <div className={classes.btnSection}>
            {workflows.map((option, index) =>
                <Button key={option.value} variant="outlined" className={clsx(classes.btn, { [classes.active]: option.selected })} onClick={e => handleSelect(index)}>{option.label}</Button>
            )}
        </div>

    return (
        <CardWorkFlow title={title} subtitle={subtitle} topic={topic} children={children} />
    );
}

export default WorkFlowDetail;