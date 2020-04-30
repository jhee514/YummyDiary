import React, { useEffect, useState } from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import "./Main/style.scss";

import ItemList from "./SearchResult/ItemList";
import { getWord } from "../modules/searchword";
import axios from "axios";
import { url } from "../modules/config";
import MainSearch from "./Main/MainSearch";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  recommendbox: {
    marginTop: "2vh",
    //border: "1px solid #FAC60E",
    width: "70%",
    minWidth: "80vw",
    flexDirection: "column",
    alignItems: "center",
  },
  searchbox: {
    width: "70%",
    minWidth: "80vw",
  },
}));
const SearchResult = (props) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          url + "/stores/search/",
          getWord(props.match.params.values)
        );
        console.log(response.data);
        setSearchData(response.data);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [props]);
  return (
    <>
      {loading ? (
        <></>
      ) : (
        <Box className={classes.root}>
          <Box width="80%" marginTop={1}>
            <MainSearch history={props.history} />
          </Box>
          <Box className={classes.recommendbox}>
            <Typography variant="h4" className={classes.header}>
              검색결과
            </Typography>
            <Typography variant="h5">
              {"'" + searchData.store_by_name.store_name + "' 로 검색한 결과입니다"}
            </Typography>
            {searchData.store_by_name.store_by_name.length == 0 ? (
              <Box minHeight="8vh">
                <Typography>검색 결과가 존재하지 않습니다.</Typography>
              </Box>
            ) : (
              <ItemList
                history={props.history}
                stores={searchData.store_by_name.store_by_name[0]}
              />
            )}
            {/* {console.log(searchData.store_by_tag)} */}
            {searchData.store_by_tag.map((tagstore)=>{
              return(
                <>
              <Typography variant="h5">{"'"+ tagstore.tag_name+"' 태그로 검색한 결과입니다"}</Typography>
              <ItemList 
                history={props.history}
                stores={tagstore.store_by_tag}
              /></>
              )
            })}
          </Box>
        </Box>
      )}
    </>
  );
};

export default SearchResult;
