import React from 'react';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Box } from '@material-ui/core';
import {storedata, hashdata} from "../modules/dummy";

const useStyles = makeStyles({
  storeSearchResult_root: {
    minWidth: 275,
    width:"25%",
    marginTop: "15px"
  },
  hashtagSearchResult_root:{
    minWidth: 275,
    width:"25%",
    marginTop: "15px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  storeSearchResult_Box: {
    marginTop: "30px",
  },
  hashtagSearchResult_Box: {
    marginTop: "70px",
  },
  storeSearchResult_Card_Box: {
      backgroundColor: "rgb(255,255,204)",
      display:"flex",
      justifyContent:"center"
  },
  storeSearchResult: {
    fontSize: "40px",
    textAlign: "center"
  },
  hashtagSearchResult_Card_Box: {
    backgroundColor: "rgb(255,255,204)",
    display:"flex",
    justifyContent:"center"
  },
  hashtagSearchResult: {
    fontSize: "40px",
    textAlign: "center"
  }
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Box className={classes.searchResult_layout}>
      <Box className={classes.storeSearchResult_Box}>
        <Typography className={classes.storeSearchResult}>
          This is "Store" Search Result
        </Typography>
      </Box>
      
      <Box className={classes.storeSearchResult_Card_Box}>
        {storedata.map((data) => (
          <Card className={classes.storeSearchResult_root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {data.id}
                </Typography>
                <Typography variant="h5" component="h2">
                  {data.storeName}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {data.content}
                </Typography>
                <Typography variant="body2" component="p">
                  {data.rating}점
                <br/><br/>
                  리뷰:{data.review_cnt}개
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">상세보기</Button>
            </CardActions>
          </Card>
      ))}
      </Box>

      <Box className={classes.hashtagSearchResult_Box}>
        <Typography className={classes.hashtagSearchResult}>
          This is "Hash Tag" Search Result
        </Typography>
      </Box>
      
      <Box className={classes.hashtagSearchResult_Card_Box}>
        {hashdata.map((data) => (
          <Card className={classes.hashtagSearchResult_root} variant="outlined">
            <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {data.id}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {data.storeName}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {data.content}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {data.rating}점
                  <br/><br/>
                    리뷰:{data.review_cnt}개
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small">상세보기</Button>
              </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}