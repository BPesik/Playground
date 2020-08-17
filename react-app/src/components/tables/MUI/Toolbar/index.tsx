import React from 'react';
import clsx from 'clsx';
import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles';
import MUIToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

type ToolbarProps = {
    amountSelected: number;
    title: string;
};

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
  }),
);

const Toolbar = ({ amountSelected, title }: ToolbarProps) => {
    const classes = useToolbarStyles();
  
    return (
      <MUIToolbar
        className={clsx(classes.root, {
          [classes.highlight]: amountSelected > 0,
        })}
      >
        {amountSelected > 0 ? (
          <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
            {amountSelected} selected
          </Typography>
        ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            {title}
          </Typography>
        )}
        {amountSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              {/* <DeleteIcon /> */}
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              {/* <FilterListIcon /> */}
            </IconButton>
          </Tooltip>
        )}
      </MUIToolbar>
    );
};
  
export default Toolbar;