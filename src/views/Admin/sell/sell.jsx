import React from 'react';
import { useState,useEffect } from 'react';
import { Grid,Link,Icon} from "@material-ui/core";
import {useUser}from '../../../context/dataProvider'
const Sell =()=>{
    const {url} = useUser();
    const [items,setItems]=useState([])
    const fetchApi = async() =>{
        const response = await fetch(`${url}selled`);
        const responseJSON = await response.json();
          setItems(responseJSON);
          console.log(responseJSON)
        }
        useEffect(()=>{
          fetchApi()
        },[])
    return(
        <>

    
        {items.length >0&& items.map(item =>{
          return(
            <>
            <p>{item.fecha.time}</p>
            {item.sell.map(ite =>{
return(
  <>
   <p>{ite.product_name}
   <img style={{width:"10%"}} src={ite.portada}/>
   <p>{ite.amount}</p>
            </p>
  </>
)
            })}
           
            <Grid container>
        
            </Grid>
           
           
       
         

            </>
          )
       
         
        })}
        </>

    )
}
export default Sell