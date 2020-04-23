import React from "react";
import {makeStyles, Container, Avatar, Grid, Paper} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
      margin: "20px 15px",
    },
    title: {
        fontSize: "30px"
    },
    content: {
      width: "100%",
      height: "100%",
      fontSize: "20px"
    },
    item: {
        width: "20vw",
        height: "300px",
        padding: "20px",
        fontSizd: "15px",
        textAlign: "center"
    }
  }));

const MyPage = (props) => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            {/* 프로필 및 식단 작성 부분 */}
            <h1 className={classes.title}>
                My page
            </h1>
            <Grid className={classes.container} container justify="space-between">
                <Grid item spacing={4}>
                    <p className={classes.content}>
                        <Avatar></Avatar> user id
                    </p>
                </Grid>
                <Grid item container justify="space-around" alignItems="center">
                    <Grid item spacing={2}>
                        <Paper className={classes.item}>
                            <h2>Breakfast</h2>
                            <hr/>
                            <p>Date: 2020 April 9th 10:00 am</p>
                            <p>Location: Home</p>
                            <p>Dish: Spagetti</p>
                            <p>Rating: ★★★★☆</p>
                        </Paper>
                    </Grid>
                    <Grid item spacing={2}>
                        <Paper className={classes.item}>
                            <h2>Lunch</h2>
                            <hr/>
                            <p>Date: 2020 April 9th 1:00 pm</p>
                            <p>Location: 맛나분식</p>
                            <p>Dish: 떡볶이</p>
                            <p>With: 도희</p>
                            <p>Rating: ★★★☆☆</p>
                        </Paper>
                    </Grid>
                    <Grid item spacing={2}>
                        <Paper className={classes.item}>
                            <h2>Dinner</h2>
                            <hr/>
                            <p>Date: 2020 April 9th 6:00 pm</p>
                            <p>Location: 회기 Eggdrop</p>
                            <p>Dish: 토스트랑 커피</p>
                            <p>With: 지희</p>
                            <p>Rating: ★★★★★</p>
                        </Paper>
                    </Grid>
                    <Grid item spacing={2}>
                        <Paper className={classes.item}>
                            <h2>+</h2>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>

            <hr/>
            
            {/* 다녀온 맛집 리스트(참여한 리뷰) */}
            <h1 className={classes.title}>
                Visited Place
            </h1>
            <Grid className={classes.container} container justify="space-between">
                <Grid item container justify="space-around" alignItems="center">
                    <Grid item spacing={2}>
                        <Paper className={classes.item}>
                            <h2>도미노피자</h2>
                            <hr/>
                            <p>Date: 2020 March 9th 10:00 am</p>
                            <p>Location: 서울시 동대문구 회기로 9가길</p>
                            <p>Dish: 포테이토피자 M</p>
                            <p>With: 동현, 민식, 한솔</p> 
                            <p>Rating: ★★★★☆</p>
                        </Paper>
                    </Grid>
                    <Grid item spacing={2}>
                        <Paper className={classes.item}>
                            <h2>맛나분식</h2>
                            <hr/>
                            <p>Date: 2020 April 9th 1:00 pm</p>
                            <p>Location: 동대문구 휘경로 4길 29</p>
                            <p>Dish: 떡볶이</p>
                            <p>With: 도희</p>
                            <p>Rating: ★★★☆☆</p>
                        </Paper>
                    </Grid>
                    <Grid item spacing={2}>
                        <Paper className={classes.item}>
                            <h2>Eggdrop</h2>
                            <hr/>
                            <p>Date: 2020 April 9th 6:00 pm</p>
                            <p>Location: Eggdrop 경희대점</p>
                            <p>Dish: 토스트랑 커피</p>
                            <p>With: 지희</p>
                            <p>Rating: ★★★★★</p>
                        </Paper>
                    </Grid>
                    <Grid item spacing={2}>
                        <Paper className={classes.item}>
                            <h2>다정식당</h2>
                            <hr/>
                            <p>Date: 2020 April 9th 8:00 pm</p>
                            <p>Location: 서울시 동대문구 이문동 283-6</p>
                            <p>Dish: 제육볶음, 맥주</p>
                            <p>With: 도희, 루이</p>
                            <p>Rating: ★★★★★</p>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MyPage;