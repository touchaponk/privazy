import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
    Card,
    TextField,
    Table,
    TableBody,
    TableRow,
    TableCell,
    CardContent,
    Button
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: "3.5px",
            border: "solid 0.5px #1f2d41",
        },
        content: {
            padding: theme.spacing(2),
        },
        icon: {
            color: "#a32431",
            fontSize: theme.typography.h5.fontSize,
            fontWeight: "bold"
        },
        topic: {
            width: "100%"
        },
        field: {
            marginTop: 0,
            marginBottom: 0
        },
        celltitle: {
            width: "40%",
            color: "#1f2d41",
            fontWeight: "bold"
        },
        cellvalue: {
            width: "60%"
        },
        btnSection: {
            '& > *': {
                margin: theme.spacing(1),
            },
            fontSize: "11px",
            color: "#1f2d41"
        },
        btn: {
            border: "solid 0.5px rgba(143, 150, 160, 0.5)",
            borderRadius: "3.5px",
            color: "#a2acba"
        },
        active: {
            borderRadius: "3.5px",
            border: "solid 0.5px #1f2d41",
            backgroundColor: "rgba(31, 45, 65, 0.1)",
            color: "#1f2d41"
        },
        table: {
            "& .MuiTableCell-root": {
                border: "0px",
            }
        },
    }),
);

const WorkFlowEditCard: React.FC = () => {
    const classes = useStyles();
    const [workflows, setWorkFlows] = useState([
        {
            value: 1,
            label: 'Contact',
            selected: false
        },
        {
            value: 2,
            label: 'Legitimate Interest',
            selected: false
        },
        {
            value: 3,
            label: 'Consent',
            selected: false
        },
        {
            value: 4,
            label: 'Legal Obligations',
            selected: false
        },
        {
            value: 5,
            label: 'Vital Interest',
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

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Table className={classes.table}>
                    <TableBody>
                        <TableRow>
                            <TableCell className={classes.celltitle} align="right">Permitted Access Person:</TableCell>
                            <TableCell className={classes.cellvalue}>
                                <TextField
                                    className={classes.field}
                                    fullWidth
                                    margin="dense"
                                    name="brandId"
                                    select
                                    SelectProps={{ native: true }}
                                    variant="outlined">
                                    <option value={1}>Operation1</option>
                                    <option value={2}>Operation2</option>
                                    <option value={3}>Operation3</option>
                                </TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.celltitle} align="right">Purpose:</TableCell>
                            <TableCell className={classes.cellvalue}>
                                <TextField
                                    className={classes.field}
                                    fullWidth
                                    margin="dense"
                                    name="brandId"
                                    select
                                    SelectProps={{ native: true }}
                                    variant="outlined">
                                    <option value={1}>Purpose1</option>
                                    <option value={2}>Purpose2</option>
                                    <option value={3}>Purpose3</option>
                                </TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.celltitle} align="right">Legal Bases for Process:</TableCell>
                            <TableCell className={classes.cellvalue}>
                                <div className={classes.btnSection}>
                                    {workflows.map((option, index) =>
                                        <Button key={option.value} variant="outlined" className={clsx(classes.btn, { [classes.active]: option.selected })} onClick={e => handleSelect(index)}>{option.label}</Button>
                                    )}
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.celltitle} align="right">Period:</TableCell>
                            <TableCell className={classes.cellvalue}>
                                <TextField
                                    className={classes.field}
                                    fullWidth
                                    margin="dense"
                                    name="brandId"
                                    variant="outlined" />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default WorkFlowEditCard;