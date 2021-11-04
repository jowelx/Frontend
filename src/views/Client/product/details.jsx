//detalles del producto
import { useState } from 'react';
import {Button, Grid,IconButton,Divider, Icon } from "@material-ui/core";
import clsx from 'clsx'
import "../../../styles/product.css"
import{ useUser} from '../../../context/dataProvider';
import axios from 'axios'
import { Redirect } from 'react-router';
import{ Link} from "react-router-dom"
 const Details =({id,model,year,state,price,brand,name,amount,category,description})=>{
    const {user,url} = useUser()
    const [active,setActive]=useState(1)
    const [cantidad,setCantidad]=useState(1)
    const [redirect,setRedirect]=useState(false)
    const enviar=()=>{
    
        let urle = url+"cart"
        axios.post(
          urle,
          {"id":id,
          "amount":cantidad,
          "user":user
        } 
        )
       .then(response => { 
     console.log(response.data)
     if(response.data === "ok"){
 
     }
      })
       
    }
    return(

<div className="cont_info">
{redirect ===true &&  <Redirect to="/login"/>}
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
    <Grid justifyContent="center" alignItems="center" container>
      <Grid item xs={4} >
      <IconButton
onClick={()=>cantidad === 0? setCantidad(0):setCantidad(cantidad - 1)}
>
    <Icon style={{color:"rgb(255,255,255)",fontSize:15}}>remove</Icon>    
</IconButton>
      </Grid>
      <Grid item xs={4}>
   <p>{cantidad}</p>
        </Grid>
        <Grid item xs={4}>
        <IconButton
onClick={()=>cantidad=== amount ?setCantidad(amount):setCantidad(cantidad + 1)}
  >
      <Icon style={{color:"rgb(255,255,255)",fontSize:15}}>add</Icon>    
  </IconButton>
        </Grid>

    </Grid>
  
    </div>
  </Grid> 
  <Grid item xs={12}>
  <p className={clsx("description_product","p")}>
  {description}
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
  <Grid  item xs={6}>
  <div className="textLeft">
  <p className={clsx("margin_top","p2")}>Categoria</p>
  <p className="p">{category}</p>
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
       
        }
    }
    onClick={()=> user === ""?setRedirect(true):enviar()}
    >
     Comprar producto
    </Button>
    </div>
 
  </Grid>
  </Grid>

  </div>
    )}
    export default Details;