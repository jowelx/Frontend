//vista principal de la app
import { useState,useEffect } from 'react';
import { Grid,Link,Icon} from "@material-ui/core";
import Product from '../../components/product'
import Slider from '../../components/slider'
import * as React from 'react';
import Carousel from 'react-elastic-carousel';
import "./carousel.css"
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
    const brackpoints = [
      {width: 1, itemsToShow:1},
      {width: 550, itemsToShow:2},
      {width: 768, itemsToShow:5},
      {width: 1280, itemsToShow:6},
    ]
    const category = [
      {
        categoria: 'Moto',
        variacion:5
      },
      {
        categoria: 'Seguridad' ,
        variacion:3
      },
      {
        categoria: 'Vehiculo',   
        variacion:5
      },
      {
        categoria: 'Repuesto'  ,
        variacion:6
      },
      {
        categoria: 'Accesorio' ,  
        variacion:3
      }
    ]; 
    return(
        <>
        
           <Grid  container >
            <Grid item xs={12}>
            <Slider/>
            </Grid>
            <Grid item md={12}>
           
            </Grid>
            <Grid item xs={12}>
              {category.map(item=>{
                return(
                  <Grid spacing={0} justifyContent="center" container>
                  <Grid item md={10}>
                
                   <Grid container>
                     <Grid item md={2}>
                     <div className="tittle_category">
                  <a href ={`/category/${item.categoria}`} style={
                    {
                      color:"rgb(60,60,60)",
                      fontSize:"1.6vw",
                      margin :"1vw",
                      display:"flex",
                      alignItems: "center",
                      textTransform: 'uppercase'
                      }
                      }>
                        {item.categoria === "Seguridad"?item.categoria:item.categoria +"s"}
                        <Icon 
                        className="tittle_arrow"
                      style={{
                        marginTop:".4vw"
                      }}
                        >chevron_right
                        </Icon>
                        </a>
                        </div>
                        </Grid>
                        </Grid>
                       
                  </Grid>
                  <Grid item xs={6} sm={3}md={11}>
                  <Carousel 
               
                  transitionMs={500}
                  itemsToShow={item.variacion} 
                  itemsToScroll={item.variacion}
                  breakPoints={brackpoints}
                  pagination={false}
                  easing="linear"
                  >
                    {items.filter(e=>e.category === item.categoria&&e.amount >0).map(item =>{                 
                       return(
                            <>     
                            <Product  
                            id={item.id}
                            tittle={item.product_name} 
                            img={item.portada} 
                            description={item.description_product}
                            price={item.price} />   
                             </>
                        )
                    })
                }  
                  </Carousel>
                 </Grid>                  
               </Grid>
                )
              })}         
            </Grid>
        </Grid>
        
        </>
    )
}

export default Home;