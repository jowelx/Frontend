//vista principal de la app
import { useState,useEffect } from 'react';
import { Grid,Link,Icon} from "@material-ui/core";
import Product from '../../components/product'
import Slider from '../../components/slider'
import * as React from 'react';
import Carousel from 'react-elastic-carousel';
import "./carousel.css"
import {useUser} from '../../context/dataProvider'

const Home =()=> {   
  const {url}= useUser();
    
    const {buscar}= useUser();
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
      value: 'Accesorios',
      label: 'Accesorios',
      icon:'sell',
      color:"rgb(255,80,80)",
      variacion:"4"
    },
    {
      value: 'Baterias',
      label: 'Baterias',
      icon:'charging_station',
      color:"rgb(250,200,20)",
      variacion:"5"
    },
      {
        value: 'Cauchos',
        label: 'Cauchos',
        icon:'local_shipping',
        color:"rgb(240,60,200)",
        variacion:"4"

      },
      {
        value: 'Ferreteria',
        label: 'Ferreteria',
        icon:'handyman',
        color:"rgb(255,80,40)",
        variacion:"4"
      },
      {
        value: 'Filtros',
        label: 'Filtros',
        icon:'filter_alt',
        color:"rgb(80,80,80)",
        variacion:"5"
      },
      {
        value: 'Frenos',
        label: 'Frenos',
        icon:'build',
        color:"rgb(00,255,140)",
        variacion:"3"
      },
      {
        value: 'Limpieza',
        label: 'Limpieza',
        icon:'cleaning_services',
        color:"rgb(180,80,80)",
        variacion:"5"
      },
      {
        value: 'lubricantes',
        label: 'lubricantes',
        icon:'opacity',
        color:"rgb(50,240,120)",
        variacion:"4"
      },
      {
        value: 'Refrigerantes',
        label: 'Refrigerantes',
        icon:'ac_unit',
        color:"rgb(25,180,220)",
        variacion:"4"
      },
      {
        value: 'Repuestos',
        label: 'Repuestos',
        icon:'miscellaneous_services',
        color:"rgb(80,80,80)",
        variacion:"5"
      },
    ];
    return(
        <>
          <p>{buscar}$$</p> 
        {buscar ===false? 
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
                <a href ={`/category/${itemc.value}`} style={
                  {
                    color:"rgb(60,60,60)",
                    fontSize:"1.6vw",
                    margin :"1vw",
                    display:"flex",
                    alignItems: "center",
                    textTransform: 'uppercase'
                    }
                    }>
                      {itemc.value}
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
                  {items.filter(e=>e.category === itemc.value&&e.amount >0 || e.state === itemc.categoria && e.amount >0).map(item =>{                 
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
      :
      <Grid container>
      <>
      {items.map(e=>{
     
        return(
     <>
     {   e.product_name.toLowerCase().includes("cau") &&
     <Grid item xs={3}>
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
      }
      
        
        </>
    )
}

export default Home;