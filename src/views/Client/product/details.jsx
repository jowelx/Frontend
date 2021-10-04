//detalles del producto
import { useState,useEffect } from 'react';
import {Button, Grid,Typography,IconButton,TextField,Divider, Icon } from "@material-ui/core";
import clsx from 'clsx'
import "../../../styles/product.css"

 const Details =({model,year,state,price,brand,name})=>{
   
    const [active,setActive]=useState(1)
    const [cantidad,setCantidad]=useState(1)
    return(

<div className="cont_info">

  <Grid  justifyContent="center" container>
      
    <Grid  item xs={12}>
  <p className="Title_product">{name}</p>
  </Grid>
  <Grid item xs={10}>
  <Divider style={{backgroundColor:"rgb(80,80,80)"}} />
  </Grid>
  <Grid item xs={12}></Grid>
  <Grid  item xs={5}>
  <div
  className={clsx("font_details",active ===1 ?"activ_product" :"cont_menu_product")}
   onClick={()=>setActive(1)}       
   >
  <p>Descripcion</p>
  </div>
  </Grid>
  <Grid justifyContent="center" item xs={5}>
  <div 
  className={clsx("font_details",active ===2 ?"activ_product" :"cont_menu_product")}
  onClick={()=>setActive(2)}
  >
  <p>Detalles</p>
  </div>
  </Grid>
  {active ===1 ?
  <>
  <Grid item xs={7}>
  <p className={clsx("title_left","margin_top","p2")}>Descripcion</p>
  </Grid> 
  <Grid item xs={5}>
<div style={{
  width:"80%",
  color:"white",
  justifyContent:"center"
  }} >
    <Grid container>
      <Grid item xs={4} >
      <IconButton

>
    <Icon>remove</Icon>    
</IconButton>
      </Grid>
      <Grid item xs={4}>
   <p>{cantidad}</p>
        </Grid>
        <Grid item xs={4}>
        <IconButton

  >
      <Icon>add</Icon>    
  </IconButton>
        </Grid>

    </Grid>
  
    </div>
  </Grid> 
  <Grid item xs={12}>
  <p className={clsx("description_product","p")}>
  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
    </p>   
  </Grid>
  </>
  :
      <>
  <Grid  justifyContent="space-between" item xs={6}>
  <div className="textLeft">
  <p className={clsx("margin_top","p2")}>Modelo</p>
  <p className="p">{model}</p>
  </div>
  </Grid>
  <Grid  item xs={6}>
  <div className="textLeft">
  <p className={clsx("margin_top","p2")}>Año</p>
  <p className="p">{year}</p>
  </div>
  </Grid>
  
  <Grid  item xs={6}>
  <div className="textLeft">
  <p className={clsx("margin_top","p2")}>Marca</p>
  
  <p className="p">{brand}</p>
  </div>
  </Grid>
  <Grid  item xs={6}>
<div className="textLeft">
  <p className={clsx("margin_top","p2")}>Estado</p>
  <p className="p">{state}</p>
  </div>
  </Grid>
  
  <Grid  item xs={6}>
  <div className="textLeft">
  <p className={clsx("margin_top","p2")}>Precio</p>
  <p className="p">{price}</p>
  </div>
  </Grid>
  <Grid   item xs={6}>
  <div className="textLeft">
  <p className={clsx("margin_top","p2")}></p>
  <p className="p"></p>
  </div>
  </Grid>
</>
 }
  <Grid  item xs={12}>
    <div className="button_product_view" >  
    <Button
    variant="contained"          
    size="small"   
    style={
        {
           background: "linear-gradient(to bottom, rgb(255, 255, 255), rgb(210, 210, 210))",
            padding:"4% 5%",
            borderRadius:"10vw",
            fontSize:"70%",
            letterSpacing:".1vw"
        }
    }
    >
     Comprar producto
    </Button>
    </div>
  </Grid>
  </Grid>
  </div>
    )}
    export default Details;