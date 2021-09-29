import { useState,useEffect } from 'react';
import { Grid,Typography } from "@material-ui/core";
import Product from '../../../components/product'
import { Redirect, Route } from "react-router-dom";

const Published =()=> {
    
    const url ='http://localhost:5000/';
    const [items,setItems]=useState([]);
    const fetchApi = async() =>{
      const response = await fetch(url);
    
      const responseJSON = await response.json();
      setItems(responseJSON);
      console.log(responseJSON)
    }
    useEffect(()=>{
      fetchApi()
    },[])
const redirect=()=>{
 return <Redirect to="/" />
}
    return(
        <>
           <Grid container >
          
     
            <Grid item xs={12}>
            <Grid container>
                {items.map((item,index )=>{
                 
                    return(
                        < >
                     
                        <Grid   item xs={6} sm={4}md={3}>
                        <a  href={`/product/${item.file.id}`}>
                        <Product 
                        key={index} 
                        tittle={item.file.product_name} 
                        img={item.file.portada} 
                        description={item.file.description_product}
                        price={item.file.price} 
                     
                        />
                       </a>
                       <p>{item.id}</p>
                        </Grid> 
                  </>
                    )
                })
            }  
                 </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default  Published;