import React from "react";
import PropTypes from "prop-types";
import Rating from "@material-ui/lab/Rating";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  scores: {
    height: "40px",
    // margin: "15px 300px",
  },
}));

function CustomizedRatings(props) {
  const classes = useStyles();
  const { rating, id, setReviewList, reviewList } = props;
  return (
    <div className={classes.scores}>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name={rating.title}
          value={rating.rating}
          onChange={(event, newValue) => {
            let tmpList = JSON.parse(JSON.stringify(reviewList));
            let newItem = { ...rating, rating: Number(newValue) };
            tmpList.scores[id] = newItem;
            setReviewList({ ...tmpList });
          }}
        />
      </Box>
    </div>
  );
}

export default CustomizedRatings;
