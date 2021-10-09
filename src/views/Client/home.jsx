//vista principal de la app
import { useState,useEffect } from 'react';
import { Grid} from "@material-ui/core";
import Product from '../../components/product'
import Navbar from '../../components/navBar'
import{ Link} from "react-router-dom"
const Home =()=> {   
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
           <Grid container >
            
            <Grid item xs={12}>
            <Grid container>
                {items.map(item =>{                 
                   return(
                        <>
                        <Grid item xs={6} sm={4}md={3}>
                        <Link
                     to={`/product/${item.id}`}
                     >
                        <Product  
                        tittle={item.product_name} 
                        img={item.portada} 
                        description={item.description_product}
                        price={item.price} />
                         </Link>
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

export default Home;