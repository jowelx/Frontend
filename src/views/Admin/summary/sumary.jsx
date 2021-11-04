import React from 'react'
import {useState,useEffect}from 'react'
import { Grid,Icon } from "@material-ui/core";
import { sumaryStyles }from '../../../styles/sumary'
import { fontStyles }from '../../../styles/fonts'
import "../../../styles/animations.css"
import {useUser}from '../../../context/dataProvider'
const Sumary =()=>{
  const font =fontStyles()
  const {url}=useUser()
    const sumarys = sumaryStyles();
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
    const category = [
        {
        value: 'Accesorios',
        label: 'Accesorios',
        icon:'sell',
        color:"rgb(255,80,80)"
      },
      {
        value: 'Baterias',
        label: 'Baterias',
        icon:'charging_station',
        color:"rgb(250,200,20)"
      },
        {
          value: 'Cauchos',
          label: 'Cauchos',
          icon:'local_shipping',
          color:"rgb(240,60,200)"

        },
        {
          value: 'Ferreteria',
          label: 'Ferreteria',
          icon:'handyman',
          color:"rgb(255,80,40)"
        },
        {
          value: 'Filtros',
          label: 'Filtros',
          icon:'filter_alt',
          color:"rgb(80,80,80)"
        },
        {
          value: 'Frenos',
          label: 'Frenos',
          icon:'build',
          color:"rgb(00,255,140)"
        },
        {
          value: 'Limpieza',
          label: 'Limpieza',
          icon:'cleaning_services',
          color:"rgb(180,80,80)"
        },
        {
          value: 'lubricantes',
          label: 'lubricantes',
          icon:'opacity',
          color:"rgb(50,240,120)"
        },
        {
          value: 'Refrigerantes',
          label: 'Refrigerantes',
          icon:'ac_unit',
          color:"rgb(25,180,220)"
        },
        {
          value: 'Repuestos',
          label: 'Repuestos',
          icon:'miscellaneous_services',
          color:"rgb(80,80,80)"
        },
      ];
return(
    <>
    <Grid justifyContent="center" container>
        <Grid item xs={10}>
        <div style={{backgroundColor:"rgb(255,255,255)",marginTop:"5vw"}}>
    <Grid justifyContent="center" container>
        <Grid item xs={12}>
            <Grid container>
            <Grid item xs={12}>
<p className={font.font600}>Productos publicados: </p>
            </Grid>
            <Grid item xs={12}>
            <p>{items.length}</p>
            </Grid>
            </Grid>
  
        </Grid>
        <Grid item xs={10}>
          <Grid container>
          {category.map(item=>{
return(
    <>
<Grid item xs={3}>
    <div style={{borderTop:"solid .4vw",borderColor:item.color}} className={sumarys.cont_product}>
    <Grid  justifyContent="center" container>
    <Grid item xs={12}>
        <Grid   alignItems="center" container>
            <Grid item xs={6}>
            <p>{item.value}:</p>
            </Grid>
            <Grid item xs={2}>
<p>{items.filter(e => e.category === item.value).length}</p>
    </Grid>
            <Grid item xs={2}>
            
<Icon style={{color: item.color}} >{item.icon}</Icon>
            </Grid>
            </Grid>


    </Grid>
    <Grid item xs={12}>
        <Grid   alignItems="center" container>
            <Grid item xs={6}>
            <p>Agotados:</p>
            </Grid>
            <Grid item xs={2}>
<p>{items.filter(e => e.category === item.value&& e.amount ===0).length}</p>
    </Grid>
            <Grid item xs={2}>
            
            {items.filter(e =>
              e.category === item.value&& e.amount ===0 
          ).length<1? <Icon style={{color:"rgb(80,255,160)"}}>check_circle</Icon>:<Icon className="iconA">error</Icon>} 
            </Grid>
            </Grid>


    </Grid>
    <Grid item xs={12}>
        <Grid   alignItems="center" container>
            <Grid item xs={6}>
            <p>Vendidos:</p>
            </Grid>
            <Grid item xs={2}>
<p>{items.filter(e => e.category === item.value&& e.amount ===0).length}</p>
    </Grid>
            <Grid item xs={2}>
            
           <Icon className="aura" style={{color:"rgb(80,255,160)"}}>monetization_on</Icon>
            </Grid>
            </Grid>


    </Grid>

</Grid>
    </div>

</Grid>
    </>
)
    })}
          </Grid>
        </Grid>
  
    </Grid>
    </div>
        </Grid>

    </Grid>
    
    </>
)
}
export default Sumary;