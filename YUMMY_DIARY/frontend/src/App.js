import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Component/Login";
import Layout from "./Component/Layout";
import SignUp from "./Component/SignUp";
import Main from "./Component/Main";
import MyPage from "./Component/MyPage";
import Review from "./Component/Review/Review";
import SearchResult from "./Component/SearchResult";
import Detail from "./Component/Detail";
import Member from"./Component/Member";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/searchResult" component={SearchResult} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/review" component={Review} />
        <Route path="/member" component={Member} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
