import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import CorptForm from "./components/CorptForm";
import LoginForm from "./components/loginForm";
import Ipdb from "./components/Ipdb";
import Templates from "./components/common/ipdb/Templates";
import Config from "./components/common/ipdb/Config";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/ipdb" component={Ipdb}></Route>
            <Route path="/template" component={Templates}></Route>
            <Route path="/config" component={Config}></Route>

            <Route path="/login" component={LoginForm}></Route>
            <Route path="/form" render={() => <CorptForm></CorptForm>}></Route>

            <Route
              path="/products/:id"
              render={(props) => <ProductDetails {...props}></ProductDetails>}
            ></Route>

            <Route
              path="/products"
              render={(props) => (
                <Products sortBy="newest" {...props}></Products>
              )}
            ></Route>
            <Route
              path="/posts/:year?/:month?"
              render={(props) => <Posts {...props}></Posts>}
            ></Route>
            <Route path="/admin" component={Dashboard}></Route>
            <Route path="/" exact component={Home}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
