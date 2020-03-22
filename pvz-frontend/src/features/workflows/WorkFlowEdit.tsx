import React, { Fragment, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    InputBase,
    InputAdornment,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    Button
} from '@material-ui/core';
import CardWorkFlow from '../../app/components/CardWorkFlow/CardWorkFlow';
import WorkFlowEditModal from './WorkFlowEditModal'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        topic: {
            fontSize: theme.typography.h5.fontSize,
            fontWeight: "bold"
        },
        input: {
            borderColor: "#a32431",
            borderWidth: '0px 0px 2px 0px',
            borderStyle: 'dashed',
            color: "#a32431",
            fontWeight: "bold",
            fontSize: theme.typography.h6.fontSize,
            marginLeft: theme.spacing(1)
        },
        editIcon: {
            "&:hover": {
                cursor: "pointer"
            }
        },
        btnAdd: {
            color: "#263956"
        },
        content: {
            width: "100%"
        },
        inner: {
            width: "100%",
            // minWidth: 700,
            minHeight: 400
        },
        table: {
            '& .MuiTableCell-root': {
                border: 'solid 0.5px rgba(162, 172, 186, 0.5)'
            }
        }
    }),
);

const WorkFlowEdit: React.FC = () => {
    return (
        <Fragment>
            <Box><WorkFlowEditSection /></Box>
        </Fragment>
    );
}

const WorkFlowEditSection: React.FC = () => {
    const classes = useStyles();

    const [editModal, setEditModal] = useState(false);

    const handleEditModalOpen = () => {
        setEditModal(true);
    };

    const handleEditModalClose = () => {
        setEditModal(false);
    };

    const handleAdd = () => { };
    const handleEdit = () => {
        handleEditModalOpen();
    };

    const topic =
        <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
            <Grid item>
                <Typography className={classes.topic} component="div">
                    Edit Workflow:
                        <span>
                        <InputBase
                            className={classes.input}
                            value="&nbsp;On-boarding"
                            endAdornment={<InputAdornment position="end" className={classes.editIcon}><i className="fas fa-pencil-alt"></i></InputAdornment>}
                        />
                    </span>
                </Typography>
            </Grid>
            <Grid item>
                <Button variant="outlined" onClick={handleAdd} className={classes.btnAdd}>
                    <i className="fas fa-plus"></i> &nbsp;Add New Data
                </Button>
            </Grid>
        </Grid>;

    const children =
        <div className={classes.content}>
            <PerfectScrollbar>
                <div className={classes.inner}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Data</TableCell>
                                <TableCell>Access Person</TableCell>
                                <TableCell>Purpose</TableCell>
                                <TableCell>Legal Basis</TableCell>
                                <TableCell>Period</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell rowSpan={2}>Name</TableCell>
                                <TableCell>Operation</TableCell>
                                <TableCell>KYC verification</TableCell>
                                <TableCell>Legal Obligations</TableCell>
                                <TableCell>Until service te</TableCell>
                                <TableCell rowSpan={2} align="center">
                                    <i className="fas fa-pencil-alt" onClick={handleEdit} />
                                </TableCell>
                            </TableRow>

                            <TableRow >
                                <TableCell>Customer Support</TableCell>
                                <TableCell>Service provision</TableCell>
                                <TableCell>Contract</TableCell>
                                <TableCell>5 years after us…</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </PerfectScrollbar>
            <WorkFlowEditModal open={editModal} onClose={handleEditModalClose}/>
        </div>;

    return (
        <CardWorkFlow topic={topic} children={children} />
    );
}

export default WorkFlowEdit;