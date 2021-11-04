import React from 'react'
import { useState,useEffect } from 'react';
import {CartStyle} from '../../../styles/cart'
import { Grid,IconButton,Icon,Button} from "@material-ui/core";
import{ Link} from "react-router-dom"
import LoadingButton from '@mui/lab/LoadingButton';
import Divider from '@mui/material/Divider';
import axios from 'axios'
import {useUser}from '../../../context/dataProvider'
const Cart =()=>{
  const {url}=useUser();
  let total=0
  const cart = CartStyle()
    const [info,setInfo]=useState([])
    const[ refresh, setRefresh] =useState( "ok")
    const Delete =(id)=>{
      const url_Delete =url+`deleteCart/${id}`
      axios.post(
        url_Delete,
        {"file":id
     
      })
     .then(response => { setRefresh( response)
 
   
    })
    }
    const fetchApi = async() =>{
      
        const response = await fetch(url+"cart");
        const responseJSON = await response.json();
          setInfo(responseJSON)
        }
        useEffect(()=>{
            fetchApi()
          },[refresh])
          return(
            <>
            
<Grid justifyContent="center" alignItems="center"  container>

            {info && info.map((item,index)=>{
              total+= item.results[0].price *item.amount
                return(
                  <Grid item xs={8}>
                    
                    <div className={cart.cont}>
                      <Grid container>

                     <Grid item xs={11}>
                    <Link
                     to={`/product/${item.results[0].id}`}
                     >
                      <Grid  alignItems="center" container>
                        <Grid item xs={4}>
<img className={cart.img} src={item.results[0].portada} />


</Grid>
<Grid item xs={7}>
<p>{item.results[0].product_name}</p>
<p>X{item.amount}</p>
<p>${item.results[0].price}</p>
</Grid>
<Grid item xs={1}>

</Grid>
</Grid>
</Link>
</Grid>
<Grid item xs={1}>
<IconButton className="cont_icon" onClick={()=> Delete(item.results[0].id)} aria-label="add to shopping cart">
                    <Icon className="icon_Delete">close</Icon>
                  </IconButton>
                  </Grid>
                  </Grid>
</div>

</Grid>
                )
               
            })}

            <Grid item xs={8}>
<div className={cart.cont}>
  <Grid justifyContent="center"alignItems="center" container>
    <Grid item xs={6}>
    <Grid justifyContent="center"alignItems="center" container>
  <Grid item xs={2}>

  <p style={{textAlign:"center"}}>Total: </p>
  </Grid>
  
  <Divider orientation="vertical" flexItem />
  
 
  <Grid item xs={2}>
  <p style={{textAlign:"center"}}>${total}</p>
</Grid>

  <Divider orientation="vertical" flexItem />

<Grid item xs={4}>
<Button
        variant="contained"
        color="primary"
        style={{justifyContent:"center"}}
        endIcon={<Icon>send</Icon>}
      >
        Comprar
      </Button>
</Grid>
</Grid>
    </Grid>
  </Grid>

</div>
            </Grid>
</Grid>

            </>
          )
}
export default Cart;