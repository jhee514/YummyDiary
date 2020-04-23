import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  hashChip_container: {
    //   display: "flex",
    //   alignItems: "center",
    //   alignContent: "center",
      marginLeft: "180px"
  }
}));

export default function SmallOutlinedChips() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return(
      <div className={classes.hashChip_container}>
          <Chip label="한식" onDelete={handleDelete}/>
          <Chip label="중식" onDelete={handleDelete}/>
          <Chip label="일식" onDelete={handleDelete}/>
          <Chip label="양식" onDelete={handleDelete}/>
          <Chip label="분위기 좋은" onDelete={handleDelete}/>
          <Chip label="양 많은" onDelete={handleDelete}/>
          <Chip label="가성비 좋은" onDelete={handleDelete}/>
          <Chip label="저렴한" onDelete={handleDelete}/>
          <Chip label="서비스 좋은" onDelete={handleDelete}/>
          <Chip label="맛있는" onDelete={handleDelete}/>
       </div>
  )
}