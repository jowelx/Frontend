import React from "react"
import { useState,useEffect } from 'react';
import { Grid,Link,Icon} from "@material-ui/core";
import {useUser} from '../../../context/dataProvider'
import Product from '../../../components/product'
const Search =(props)=>{
    const sear = props.match.params.search
    const {url}= useUser();
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
<Grid justifyContent="center" container>
    <Grid md={10}>
       <div className="tittle_category">

       
        <p style={
                  {
                    color:"rgb(60,60,60)",
                 
                    margin :"1vw",
                    display:"flex",
                    alignItems: "center",
                    textTransform: 'uppercase'
                    }
                    }>Resultados para la busqueda de: {sear}</p>
        </div>
    </Grid>
    
    <Grid item md={11}>
    <Grid container>
        <>
        {items.map(e=>{
       
          return(
       <>
       {   e.product_name.toLowerCase().includes(sear) &&
       <Grid item xs={2}md={3}>
       <Product  
                                   id={e.id}
                                   tittle={e.product_name} 
                                   img={e.portada} 
                                   description={e.description_product}
                                   price={e.price}
                                    />   
       </Grid>
       
       }                    
       </>
          )
          
        })}
        </>
           </Grid>
    </Grid>
</Grid>

        
    )
}
export default Search;