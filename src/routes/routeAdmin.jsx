import { Switch } from "react-router-dom";

import { Redirect, Route } from "react-router-dom";
import Dashboard from '../views/Admin/dashboard/dashboard'
import PublicRoutes from './routes'
import Update from '../views/Admin/published/update'
const PrivateRoute = ({ component, ...options }) => {
  const isAuth = false;
  if (!isAuth) return <Route {...options} component={component} />;
  return <Redirect to="/" />;
};

const PrivateRoutes = () => {
  return (
<>

    <Switch>
    <PrivateRoute exact path="/dashboard" component={Dashboard} />
    <PrivateRoute exact path="/Update/:id" component={Update} />
      <PrivateRoute  path="/" component={PublicRoutes } />
      

    </Switch>
  </>
  );
};

export default PrivateRoutes;