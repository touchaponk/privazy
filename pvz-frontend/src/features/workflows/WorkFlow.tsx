import React, { useState, Fragment } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, InputBase, Box, TextField, MenuItem, Grid } from '@material-ui/core';
import CardWorkFlow from '../../app/components/CardWorkFlow/CardWorkFlow';

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

const WorkFlow: React.FC = () => {
    return (
        <Fragment>
            <Box mb={6}><BussinessSection /></Box>
            <Box><IndustrySection /></Box>
        </Fragment>
    );
};

const BussinessSection: React.FC = () => {
    const classes = useStyles();

    const topic = <Typography className={classes.topic}>Business Name</Typography>;
    const children = <InputBase
        fullWidth
        className={classes.input}
        placeholder="Type you business name here"
    />

    return (
        <CardWorkFlow topic={topic} children={children} />
    );
}

const IndustrySection: React.FC = () => {
    const classes = useStyles();

    const [industry, setIndustry] = useState(1);
    const [industryOther, setIndustryOther] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIndustry(parseInt(event.target.value));
    };

    const handleChangeOther = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIndustryOther(event.target.value);
    };

    const industrys = [
        {
            value: 1,
            label: 'Financial',
        },
        {
            value: 2,
            label: 'eCommerce',
        },
        {
            value: 3,
            label: 'Healthcare',
        },
        {
            value: 4,
            label: 'Retail',
        },
        {
            value: 5,
            label: 'Membership',
        },
        {
            value: 6,
            label: 'Manufacture',
        },
        {
            value: 7,
            label: 'Real Estate Construction and Management',
        },
        {
            value: 8,
            label: 'Consulting Service',
        },
        {
            value: 9,
            label: 'Tourism',
        },
        {
            value: 10,
            label: 'IT',
        },
        {
            value: 11,
            label: 'Others > Specify',
        },
    ];

    const topic = <Typography className={classes.topic}>Industry</Typography>;
    const children =
        <Grid container>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    select
                    value={industry}
                    onChange={handleChange}
                    variant="outlined"
                >
                    {industrys.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

            {industry === 11 &&
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        value={industryOther}
                        onChange={handleChangeOther}
                        variant="outlined"
                        className={classes.industryOther}
                    />
                </Grid>
            }
        </Grid>

    return (
        <CardWorkFlow topic={topic} children={children} />
    );
}

export default WorkFlow;