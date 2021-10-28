//rutas principales de la aplicacion
import { Switch } from "react-router-dom";
import Home from '../views/Client/home';
import Login from '../views/Client/login/login'
import Register from '../views/Client/register/register'
import { Redirect, Route } from "react-router-dom";
import ProductId from '../views/Client/product/product'
import Modify from '../views/Admin/published/modifi'
import Category from '../views/Client/category/category'
import Cart from '../views/Client/cart/cart'
import Navbar from '../components/navBar'
import ForgotPassword  from '../views/Client/forgotPass/forgotPass'
const PublicRoute = ({ component, ...options }) => {
  const isAuth = false;
  if (!isAuth) return <Route {...options} component={component} />;
  return <Redirect to="/" />;
};

const PublicRoutes = () => {
  return (
<>
<Navbar/>
    <Switch>
   
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute exact path="/login" component={Login} />
      <PublicRoute exact path="/register" component={Register} />
      <PublicRoute exact path="/category/:categoria" component={Category} />
      <PublicRoute exact path="/product/:id" component={ProductId} />
      <PublicRoute exact path="/xxx" component={Modify} />
      <PublicRoute exact path="/forgotPassword" component={ForgotPassword} />
      <PublicRoute exact path="/cart" component={Cart} />
    </Switch>
  </>
  );
};

export default PublicRoutes;