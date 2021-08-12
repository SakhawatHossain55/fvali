import React, { Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Help from './pages/Help/Help';
// import Home from './pages/Home/Home';
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
          <Route exact path="/help" component={Help} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default AppRouter;
