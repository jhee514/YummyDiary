import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import {taglist} from "../../modules/dummy";

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
    width: "70%",
    marginLeft: "30%"
  },
  hashChip: {
    marginTop: "5px",
    marginRight: "3px",
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
    // 음식점 id기반의 tag list를 불러와 반복문을 통해 label을 채워준다.
    <div className={classes.hashChip_container}>
      <Box alignItems="center">
        {taglist.map((data) => 
          <Chip 
            label={data.tagName} 
            className={classes.hashChip}
            onClick={handleClick}
            onDelete={handleDelete}
            clickable={handleClick}
          />
        )}
      </Box>
    </div>
  )
}