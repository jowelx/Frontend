import React from 'react';
import { Grid,Icon } from "@material-ui/core";
import {fontStyles} from '../styles/fonts'
import Divider from '@mui/material/Divider';
import {FooterStyles} from'../styles/footer'
import clsx from 'clsx'
const Footer =()=>{
  const footer = FooterStyles();
    const font=fontStyles();
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
          value: 'Parches',
          label: 'Parches',
          icon:'grid_4x4',
          color:"rgb(255,40,140)"
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
   
        <div style={{marginTop:"1vw",paddingTop:"4vw",height:"20vw",width:"100%",backgroundColor:"rgb(25,25,25)"}}>
<Grid container>
  <Grid item xs={10}>
  <Grid spacing={6}  justifyContent="center" container>
  <Grid item xs={2}>
  <img style={{width:"100%"}} src="https://res.cloudinary.com/dfaaqkh9d/image/upload/v1636915471/logo/WhatsApp_Image_2021-11-14_at_11.24.16_AM_qsjcej.png"/>


  </Grid>
<Grid item xs={2}>
<p style={{margin:1}} className={clsx(font.font600,footer.title )}>Categorias de los productos</p>
<Divider style={{backgroundColor:"rgb(60,60,60)"}}  />
<Grid container>
{category.map(item =>{
    return(
        <>
        <Grid item xs={6}>
        <a  href={`/category/${item.value}`}>
        <p style={{margin:0,fontSize:".8vw",color:"rgb(200,200,200)"}} className={font.font600}>{item.value}</p>
</a>
        </Grid>

        </>
    )
})}
 
</Grid>


</Grid>
<Grid item xs={2}>
<p style={{margin:1}} className={clsx(font.font600,footer.title )}>Sobre nosotros</p>
<Divider style={{backgroundColor:"rgb(60,60,60)"}}  />
</Grid>

</Grid>
  </Grid>
</Grid>
<Divider style={{backgroundColor:"rgb(60,60,60)",marginTop:"2vw"}}  />


        </div>

        </>
    )
}
export default Footer;