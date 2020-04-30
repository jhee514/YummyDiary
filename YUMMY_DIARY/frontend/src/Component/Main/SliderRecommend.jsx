import React from "react";
import { Typography, Link } from "@material-ui/core";
import Slider from "react-slick";

const SliderRecommend = (props) => {
  const { recommend} = props;
    
  const settings = {
    infinite: recommend.store_list.length >3 ?true:false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
    {recommend.store_list.map((store) => (
      <div key={store.id}>
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
            onClick={(event) =>
              props.history.push("/detail/" + store.id)
            }
          >
            상세보기
          </Link>
        </Typography>
      </div>
    ))}
  </Slider>
  );
};

export default SliderRecommend;
