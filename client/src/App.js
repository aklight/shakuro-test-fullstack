import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar.js";
import Footer from "./components/layout/Footer.js";
import Landing from "./components/layout/Landing.js";
import Login from "./components/auth/Login.js";
import Providers from "./components/providersList/Providers.js";
import Refill from "./components/refill/Refill.js";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/login" component={Login} />
              <Route exact path="/providers" component={Providers} />
              <Route exact path="/refill/:provider" component={Refill} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
