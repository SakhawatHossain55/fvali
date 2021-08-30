import Footer from "components/common/Footer";
import ProductDetails from "components/home/ProductDetails";
import Login from "Login/Login";
import React, { Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "SignIn/SignIn";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Help = React.lazy(() => import("./pages/Help/Help"));

// eslint-disable-next-line react/prop-types
const AppRouter: React.FC = ({ children }) => {
  return (
    <Router>
      {children}
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/product/:id" component={ProductDetails} />
        </Suspense>
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
