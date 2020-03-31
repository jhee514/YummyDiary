import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Component/Home";
import Layout from "./Component/Layout";
import SignUp from "./Component/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
