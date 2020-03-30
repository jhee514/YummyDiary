import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Component/Home";
import Layout from "./Component/Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route to="/" component={Home} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
