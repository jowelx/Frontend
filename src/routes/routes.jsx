//rutas principales de la aplicacion
import { Switch } from "react-router-dom";
import Home from '../views/Client/home';
import Login from '../views/Client/login/login'
import Register from '../views/Client/register/register'
import { Redirect, Route } from "react-router-dom";
import Dashboard from '../views/Admin/dashboard/dashboard'
import ProductId from '../views/Client/product/product'
import Update from '../views/Admin/published/update'
import Modify from '../views/Admin/published/modifi'
import{ DataProvider,useUser} from '../context/dataProvider';
const PublicRoute = ({ component, ...options }) => {
  const isAuth = false;
  if (!isAuth) return <Route {...options} component={component} />;
  return <Redirect to="/" />;
};

const PublicRoutes = () => {
  return (

    <Switch>
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute exact path="/login" component={Login} />
      <PublicRoute exact path="/register" component={Register} />
      <PublicRoute exact path="/dashboard" component={Dashboard} />
      <PublicRoute exact path="/product/:id" component={ProductId} />
      <PublicRoute exact path="/Update/:id" component={Update} />
      <PublicRoute exact path="/xxx" component={Modify} />
    </Switch>
  
  );
};

export default PublicRoutes;