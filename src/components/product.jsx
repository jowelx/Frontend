import '../styles/slide.css'
import Icon from '@material-ui/core/Icon';
import { Grid,Typography } from "@material-ui/core";
import { useState,useEffect } from 'react';
import {homeStyles} from '../styles/home'
const Product =({tittle,img,price,description})=> {
  const Home =homeStyles();


 
 
  

  return (
    <div className="appp">
       
        <div>
      
    
      <div className={Home.slider}>
        <div className="container">
      <Grid container spacing={0}>

      <div className="items">
 


 <img src={img}className={Home.itemsImg} />
 

    </div>  
      <Grid item xs={7} >
      <p className="tittle_product">{tittle}</p>
      </Grid>
      <Grid item xs={5} >
      <p className={Home.price} >{price} $</p>
      </Grid>
      <Grid item xs={12} >
        <div className={Home.cont_description}>
      <p className="descriptionProduct" >{description}</p>
      </div>
      </Grid>
      <Grid item xs={12} >
        <div className="cont_button">
       <Grid container>
         <Grid item xs={9}>
        <a href className="text_button" >
      Ver producto
        </a>
        </Grid>
        <Grid  item xs={2}>
        <Icon className="icon_product">arrow_forward</Icon>
        </Grid>
        </Grid>
        </div>
      </Grid>
</Grid>
</div>
</div>
     
    
     </div>
    </div>
  );
}

export default Product;