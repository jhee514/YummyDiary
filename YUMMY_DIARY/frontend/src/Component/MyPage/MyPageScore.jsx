import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

export default function SimpleRating(props) {
  const [value, setValue] = React.useState(2);
  const {score} = props;
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={score} readOnly precision={0.1}/>
      </Box>
    </div>
  );
}
