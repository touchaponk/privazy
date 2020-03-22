import React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Card, Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            border: "solid 0.5px #1f2d41",
            width: "100%",
            padding: theme.spacing(3),
            display: 'flex',
            alignItems: 'center',
            //justifyContent: 'space-between'
            "&:hover": {
                cursor: "pointer"
            }
        },
        text: {
            marginLeft: theme.spacing(2)
        },
        activeDataSubject: {
            backgroundColor: "rgba(31, 45, 65, 0.1)"
        }
    }),
);

interface IProps {
    index: number;
    title: string;
    subtitle: string;
    isSelect: boolean;
    handleSelect: (id: number) => any
}

const CardDataSubject: React.FC<IProps> = ({ index, title, subtitle, isSelect, handleSelect }) => {
    const classes = useStyles();

    return (
        <Card className={clsx(classes.root, { [classes.activeDataSubject]: isSelect })} onClick={e => handleSelect(index)}>
            <div>{isSelect ? <i className="fas fa-check"></i> : <i className="fas fa-plus"></i>}</div>
            <Typography component="div" className={classes.text}>
                <Box>{title}</Box>
                <Box>{subtitle}</Box>
            </Typography>
        </Card>
    );
};

export default CardDataSubject;