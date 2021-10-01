import '../styles/slide.css'
import {navbar} from '../styles/navbar';
import Icon from '@material-ui/core/Icon';
import { Grid } from "@material-ui/core";
import Badge from '@material-ui/core/Badge';
import {  makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import UserLoged from './navbarComponents/user'
const NavBar =()=> {
    const NavBar = navbar()
      const loveIcon = {
        color: 'secondary',
        children: <FavoriteBorderIcon style={{ color: "rgb(255,255,255)" }}/>,
      };
      const shopIcon = {
        color: 'secondary',
        children: <ShoppingCartIcon style={{ color: "rgb(255,255,255)" }}/>,
      };
return(
    <>
    <div className={NavBar.cont_Nav}>
        <Grid container>
            <Grid item md={3}>
    <img  className={NavBar.logo}src="https://res.cloudinary.com/dfaaqkh9d/image/upload/v1631387370/logo/41a.amazon_logo_RGB_REV_poj3hr.png"/>
    </Grid>
    <Grid item  xs={10} md={5}>
    <input className={NavBar.input} type="text"/>
    </Grid>
    <Grid item xs={2} md={1}>
    <Icon className={NavBar.search_icon}>
        search
    </Icon>
    </Grid>
    <Grid item md={3}>
<Grid container>
<Grid item md={2}>
<Badge className={NavBar.iconsWhite} badgeContent={1000000000000000000} {...loveIcon} />
</Grid>
<Grid item md={2}>
<Badge className={NavBar.iconsWhite} badgeContent={1000000000000000000} {...shopIcon} />
</Grid>
<Grid item md={3}>
    <div className={NavBar.contButon}>
        <a href="/login" >
<Grid container>
        <Grid item md={9}>
<UserLoged />
   </Grid>
</Grid>
</a>
</div>
</Grid>
</Grid>
</Grid>
</Grid>
</div>
    </>
 )
}

export default NavBar ;