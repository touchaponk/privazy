import React, { useState, Fragment } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import CardWorkFlow from '../../app/components/CardWorkFlow/CardWorkFlow';
import CardDataSubject from '../../app/components/CardDataSubject/CardDataSubject';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        topic: {
            fontSize: theme.typography.h5.fontSize,
            fontWeight: "bold"
        },
        input: {
            borderColor: "#a2acba",
            borderWidth: '0px 0px 2px 0px',
            borderStyle: 'dashed '
        },
        industryOther: {
            marginTop: theme.spacing(3)
        }
    }),
);

const WorkFlowDataSubject: React.FC = () => {
    return (
        <Fragment>
            <DataSubjectSection />
        </Fragment>
    );
};

const DataSubjectSection: React.FC = () => {
    const classes = useStyles();

    const topic = <Typography className={classes.topic}>Which Group of Data Subject do you concern the most?</Typography>;
    const children =

        <CardDataSubjectSection />

    return (
        <CardWorkFlow topic={topic} children={children} />
    );
}

const CardDataSubjectSection: React.FC = () => {
    const [formState, setFormState] = useState({
        selected: [false, false, false]
    });

    const datasubject = [
        {
            value: 1,
            title: 'Employee',
            subtitle: 'I.e. employee, directors and shareholders',
        },
        {
            value: 2,
            title: 'Customer / Service Users',
            subtitle: 'i.e. individual customer and investors in listed companies',
        },
        {
            value: 3,
            title: 'Business Partner',
            subtitle: 'i.e. individual outsource, service providers',
        }
    ];

    const handleSelect = (id: number) => {
        let oldIndex = formState.selected.findIndex(x => x === true);
        let newValues = [...formState.selected];

        if (oldIndex !== -1) newValues[oldIndex] = false;

        newValues[id] = true;

        setFormState(formState => ({
            ...formState,
            selected: newValues
        }));
    }

    return (
        <Fragment>
            <Grid container spacing={2}>
                {datasubject.map((item, index) =>
                    <Grid item xs={12} key={item.value}>
                        <CardDataSubject index={index} title={item.title} subtitle={item.subtitle} isSelect={formState.selected[index]} handleSelect={handleSelect} />
                    </Grid>
                )}
            </Grid>
        </Fragment>
    );
};

export default WorkFlowDataSubject;