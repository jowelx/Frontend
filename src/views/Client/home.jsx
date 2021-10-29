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
        categoria: 'Cauchos',
        variacion:4
      },
      {
        categoria: 'Baterias',
        variacion:4
      },
      {
        categoria: 'lubricantes',
        variacion:4
      },
      {
        categoria: 'Parches',
        variacion:4
      },
      {
        categoria: 'Pesas',
        variacion:4
      },
      {
        categoria: 'Repuestos',
        variacion:4,
      },
      {
        categoria: 'Limpieza',
        variacion:4,
      },
      {
        categoria: 'Accesorios',
        variacion:4,
      },
      {
        categoria: 'Refrigerantes',
        variacion:4,
      },
      {
        categoria: 'Ferreteria',
        variacion:4,
      },
      {
        categoria: 'Filtros',
        variacion:4,
      },
      {
        categoria: 'Frenos',
        variacion:4,
      },
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
              {category.map(itemc=>{
                return(
                  <Grid spacing={0} justifyContent="center" container>
                  <Grid item md={10}>
                
                   <Grid container>
                     <Grid item md={2}>
                     <div className="tittle_category">
                  <a href ={`/category/${itemc.categoria}`} style={
                    {
                      color:"rgb(60,60,60)",
                      fontSize:"1.6vw",
                      margin :"1vw",
                      display:"flex",
                      alignItems: "center",
                      textTransform: 'uppercase'
                      }
                      }>
                        {itemc.categoria }
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
                  itemsToShow={itemc.variacion} 
                  itemsToScroll={itemc.variacion}
               
                  pagination={false}
                  easing="linear"
                  >
                    {items.filter(e=>e.category === itemc.categoria&&e.amount >0 || e.state === itemc.categoria && e.amount >0).map(item =>{                 
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