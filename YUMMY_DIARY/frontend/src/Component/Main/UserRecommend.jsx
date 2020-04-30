import React, { useEffect, useState } from "react";
import { makeStyles, Typography, Link } from "@material-ui/core";
import Slider from "react-slick";
import "./style.scss";
import axios from "axios";
import ScaleLoader from "react-spinners/ScaleLoader";
import { url } from "../../modules/config"

const useStyles = makeStyles((theme) => ({
    gridList: {
        flexWrap: "nowrap",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: "translateZ(0)",
    },
    gridListTile: {
        backgroundColor: "#FFFFFF",
        border: "1px solid #FAC60E",
        margin: "1px 1px 1px 1px",
    },
    slider: {
        marginTop: "2vh",
    },
}));
const MainRecommend = (props) => {
    const classes = useStyles();
    const [recommends, setRecommends] = useState([]);
    const [storenames, setStorenames] = useState([]);
    const [datavalidate, setDatavalidate] = useState(false);
    const [loading, setLoading] = useState(false);
    const token = sessionStorage.getItem("token");
    //   const token = `jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5NTAzNzksInVzZXJuYW1lIjoiYmFjazFAc3NhZnkuY29tIiwiZXhwIjoxNTg4NzY0MTQyLCJlbWFpbCI6ImJhY2sxQHNzYWZ5LmNvbSIsIm9yaWdfaWF0IjoxNTg4MTU5MzQyfQ.ypQbBJdU_ZMG16GPEC4heSly9jXLwk7XhbpsaJNAd8k`;
    //   console.log(token);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setDatavalidate(false)
                setRecommends(null);
                setLoading(true);
                const response = await axios.get(
                    //   url+"/stores/recommand/", {headers:{authorization : "jwt "+sessionStorage.getItem("token")}}
                    url + "/stores/recommand/", { headers: { authorization: "jwt " + token } }
                );
                if (response.data.validation) {
                    setRecommends(response.data.Recommand_Store.store_list);
                    // console.log(response.data.store_list);
                    setStorenames(response.data.Recommand_Store.category_name);
                    // console.log(response.data.category_name);
                    setDatavalidate(true)
                } else {
                    alert(response.data)
                }
            } catch (e) {
                console.error(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
    };
    return (
        <div>
            <Typography>사용자 기반 추천 목록</Typography>
            {
                <Slider {...settings} className={classes.slider}>
                    {loading ? (
                        <div>
                            <ScaleLoader />
                        </div>
                    ) : (<>
                        {
                            datavalidate ? <>{
                                recommends.map((recommend, index) => (
                                    <div key={recommend[index].id}>
                                        <img
                                            src={recommend[index].image}
                                            alt={recommend[index].name}
                                            style={{ width: "16vw", height: "12vw" }}
                                        />
                                        <Typography variant="h5">{recommend[index].name}</Typography>
                                        <Typography variant="body2">{recommend[index].address}</Typography>
                                        <Typography variant="h6">{recommend[index].tel}</Typography>
                                        <Typography variant="caption">
                                            <Link
                                                onClick={(event) =>
                                                    props.history.push("/detail/" + recommend[index].id)
                                                }
                                            >
                                                상세보기
                            </Link>
                                        </Typography>
                                    </div>
                                ))
                            }</> : <></>
                        }
                    </>
                        )}
                </Slider>
            }
        </div >
    );
};

export default MainRecommend;
