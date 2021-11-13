//barra de navegacion
import '../styles/slide.css'
import {navbar} from '../styles/navbar';
import Icon from '@material-ui/core/Icon';
import { Grid } from "@material-ui/core";
import Badge from '@material-ui/core/Badge';
import { useState,useEffect } from 'react';
import{ useUser} from '../context/dataProvider';
import UserLoged from './navbarComponents/user'
import{ Link} from "react-router-dom"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import clsx from 'clsx';
import MenuMobile from './menuMobile'
const NavBar =()=> {

  const {user,setBuscar,url} = useUser()
  const [data,setData]=useState()
  const NavBar = navbar()
  const handleChangeData = (prop) => (event) => {
    setData(event.target.value);
    };
      const [cart,setCart]=useState(0)
    const fetchApi = async() =>{
        
        const response = await fetch(url+"cart");
        const responseJSON = await response.json();
          setCart(responseJSON.length)
          
        }
        useEffect(()=>{
            fetchApi()
          },[user])
return(
    <>
    <div className={NavBar.cont_Nav}>
        <Grid justifyContent="center" alignItems="center" container>
            <Grid item xs={4} md={3}>
            <Link
                     to={`/`}
                     >
    <img   className={NavBar.logo}src="https://res.cloudinary.com/dfaaqkh9d/image/upload/v1631387370/logo/41a.amazon_logo_RGB_REV_poj3hr.png"/>
   </Link>
    </Grid>
    <Grid item  xs={6} md={5}>
      <div style={{margin:"1vw"}}>
    <Paper
    className={NavBar.cont}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
  
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar producto"
        onChange={handleChangeData('data')}
        value={data}
      />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    
      <IconButton 
  
      sx={{ p: '10px' }} aria-label="search">
         <Link style={{margin:0,textDecoration:"none"}} to={`/search/${data}`}>
         <SearchIcon />
         </Link>
      </IconButton>
    
     
    </Paper>
    </div>
    </Grid>
  <Grid item xs={2} md={1}>
    <div className={NavBar.enable}>
<MenuMobile/>
</div>
  </Grid>
    <Grid item xs={2} md={3}>
<Grid container>
<Grid item xs={6} md={2}>
<Badge color="secondary" className={NavBar.disabled} style={{marginTop:10}} badgeContent={100000}  >
<Icon className={NavBar.iconsWhite}>card_giftcard</Icon>
  </Badge>
  
</Grid>
<Grid item xs={6} md={2}>
<a href="/cart" >
<Badge color="secondary" className={NavBar.disabled} style={{marginTop:10}} badgeContent={cart}  >
<Icon className={NavBar.iconsWhite}>shopping_cart</Icon>
</Badge>
</a>
</Grid>
<Grid item xs={12} md={3}>
    <div className={clsx([NavBar.contButon])}>
      
<Grid container>
        <Grid item md={9}>
<UserLoged user={user}/>
   </Grid>
</Grid>
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