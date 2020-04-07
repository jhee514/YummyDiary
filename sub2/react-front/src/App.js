import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Component/Login";
import Layout from "./Component/Layout";
import SignUp from "./Component/SignUp";
import Main from "./Component/Main";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
