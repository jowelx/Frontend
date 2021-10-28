import React from 'react';
import { useState,useEffect } from 'react';
import { Grid} from "@material-ui/core";
import Product from '../../../components/product'
import {CategoryStyles} from '../../../styles/category'
const Category =(props)=>{
    const page =props.match.params.categoria;
    const categoryStyles=CategoryStyles();
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
return(
    <>
<Grid justifyContent="center"container>
    <Grid item xs={11}>
<p>{page}</p>
    </Grid>
<Grid item xs={10}>
    <Grid justifyContent="left" container>
{items.filter(e=>e.category === page&&e.amount >0 || e.state === page && e.amount >0).map(item =>{
    return(
        <>
        <Grid item xs={3}>
        <Product 
               id={item.id}
               tittle={item.product_name} 
               img={item.portada} 
               description={item.description_product}
               price={item.price}
        />
        </Grid>
        </>
    )
})}
</Grid>
</Grid>
</Grid>
    </>
)
}
export default Category;