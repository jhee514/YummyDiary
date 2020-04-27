import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  SendButton: {
    backgroundColor: "#FAC60E",
    
  }
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        className={classes.SendButton} 
        variant="contained"
      >
      리뷰 올리기
      </Button>
    </div>
  );
}