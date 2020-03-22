import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Card, Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            boxShadow: "0 10px 10px 0 rgba(0, 0, 0, 0.09)",
            padding: theme.spacing(1)
        },
        icon: {
            color: "#a32431",
            fontSize: theme.typography.h5.fontSize,
            fontWeight: "bold"
        },
        topic: {
            width: "100%"
        }
    }),
);

interface IProps {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    topic?: React.ReactNode;
    children?: React.ReactNode | null;
}

const CardWorkFlow: React.FC<IProps> = ({ title, subtitle, topic, children }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            {/* <CardContent> */}
                {title &&
                    <Box display="flex" justifyContent="center">
                        <Box>
                            {title}
                        </Box>
                    </Box>
                }

                {subtitle &&
                    <Box display="flex" justifyContent="center">
                        <Box>
                            {subtitle}
                        </Box>
                    </Box>
                }

                {topic &&
                    <Box display="flex" justifyContent="flex-start" m={1} p={1}>
                        <Box p={1} >
                            <span className={classes.icon}>
                                <i className="fas fa-arrow-right" />
                            </span>
                        </Box>
                        <Box p={1} className={classes.topic}>
                            {topic}
                        </Box>
                    </Box>
                }

                {children &&
                    <Box display="flex" justifyContent="flex-start" m={1} p={1}>
                        {children}
                    </Box>
                }
            {/* </CardContent> */}
        </Card>
    );
}

export default CardWorkFlow