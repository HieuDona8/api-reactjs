import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import ProductList from "./components/ProductList/ProductList";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <Menu />
        <div className="container">
          <div className="row">
            {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-info mb-10">
                Thêm Sản Phẩm
              </button>
              <ProductList />
            </div>
             */}
            {this.showContentMenus(routes)}
          </div>
        </div>
      </Router>
    );
  }

  showContentMenus = (routes) =>{
    var result = null;
    if(routes.length > 0 ){
      result = routes.map((route, index)=>{
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      });
      
    }
    return <Switch>
      {result}
    </Switch>
  }
}

export default App;
