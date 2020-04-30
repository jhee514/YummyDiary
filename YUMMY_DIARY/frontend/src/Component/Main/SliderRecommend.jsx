import React from "react";
import { Typography, Link } from "@material-ui/core";

const SliderRecommend = (props) => {
  const {index, recommend,array} = props;
  array.splice(index,1)  
  return (
    <div key={index}>
      <Typography>{recommend.category_name}</Typography>
      {recommend.store_list.map((store, sindex) => (
        <div key={sindex}>
          <img
            src={store.image}
            alt={store.name}
            style={{ width: "16vw", height: "12vw" }}
          />
          <Typography variant="h5">{store.name}</Typography>
          <Typography variant="body2">{store.address}</Typography>
          <Typography variant="h6">{store.tel}</Typography>
          <Typography variant="caption">
            <Link
              onClick={(event) => props.history.push("/detail/" + store.id)}
            >
              상세보기
            </Link>
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default SliderRecommend;
