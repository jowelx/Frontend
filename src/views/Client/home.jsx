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
      variacion1:"2",
      variacion2:"2",
      variacion3:"4",
      variacion4:"5"
    },
    {
      value: 'Baterias',
      label: 'Baterias',
      icon:'charging_station',
      color:"rgb(250,200,20)",
      variacion1:"2",
      variacion2:"2",
      variacion3:"4",
      variacion4:"5"
    },
      {
        value: 'Cauchos',
        label: 'Cauchos',
        icon:'local_shipping',
        color:"rgb(240,60,200)",
        variacion1:"2",
        variacion2:"2",
        variacion3:"4",
        variacion4:"5"

      },
      {
        value: 'Ferreteria',
        label: 'Ferreteria',
        icon:'handyman',
        color:"rgb(255,80,40)",
        variacion1:"2",
        variacion2:"2",
        variacion3:"4",
        variacion4:"5"
      },
      {
        value: 'Filtros',
        label: 'Filtros',
        icon:'filter_alt',
        color:"rgb(80,80,80)",
        variacion1:"2",
        variacion2:"2",
        variacion3:"4",
        variacion4:"5"
      },
      {
        value: 'Frenos',
        label: 'Frenos',
        icon:'build',
        color:"rgb(00,255,140)",
        variacion1:"2",
        variacion2:"2",
        variacion3:"4",
        variacion4:"5"
      },
      {
        value: 'Limpieza',
        label: 'Limpieza',
        icon:'cleaning_services',
        color:"rgb(180,80,80)",
        variacion1:"2",
        variacion2:"2",
        variacion3:"4",
        variacion4:"5"
      },
      {
        value: 'lubricantes',
        label: 'lubricantes',
        icon:'opacity',
        color:"rgb(50,240,120)",
        variacion1:"2",
        variacion2:"2",
        variacion3:"4",
        variacion4:"5"
      },
      {
        value: 'Refrigerantes',
        label: 'Refrigerantes',
        icon:'ac_unit',
        color:"rgb(25,180,220)",
        variacion1:"2",
        variacion2:"2",
        variacion3:"4",
        variacion4:"5"
      },
      {
        value: 'Repuestos',
        label: 'Repuestos',
        icon:'miscellaneous_services',
        color:"rgb(80,80,80)",
        variacion1:"2",
        variacion2:"2",
        variacion3:"4",
        variacion4:"5"
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
                <a  href ={`/category/${itemc.value}`} style={
                  {
                    color:"rgb(60,60,60)",
                 
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
                <Grid item xs={12} sm={3}md={11}>
                <Carousel 
             breakPoints={[
              {width: 1, itemsToShow:itemc.variacion1,itemsToScroll:itemc.variacion1},
              {width: 550, itemsToShow:itemc.variacion2,itemsToScroll:itemc.variacion2},
              {width: 768, itemsToShow:itemc.variacion3,itemsToScroll:itemc.variacion3},
              {width: 1280, itemsToShow:itemc.variacion4,itemsToScroll:itemc.variacion4},
             ]}
                transitionMs={500}
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
      
      
        
        </>
    )
}

export default Home;