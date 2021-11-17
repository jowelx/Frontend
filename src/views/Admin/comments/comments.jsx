import React from 'react'
import {useState,useEffect}from 'react'
import { Grid,Icon} from "@material-ui/core";
import PanelComment from './comment/comment'
import ProductComments from './product/product'
import ImageList from '@mui/material/ImageList';
import axios from 'axios'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import{useUser}from '../../../context/dataProvider'
const CommentsAdmin=({setid})=>{
      const {url} = useUser();

    const [items,setItems]=useState([]);
    const [res, setRes]=useState();
    const [coments,setComents]=useState([])
    const [product,setProduct]=useState({
      name:"",
      img:""
    })
    const[id,setId]=useState()
    const fetchApi = async() =>{
   
        const response = await fetch(url);
        const responseJSON = await response.json();
          setItems(responseJSON);
          console.log(responseJSON)
        }
        let urle =url+`updateComments/${id}`
        const fetchComent = async() =>{      
          axios.post(
            urle,
            {
            "data":id, 
           } 
          )
         .then(response => { 
       console.log(response)
       setComents(response.data)
       }
        )
          }
        useEffect(()=>{
          fetchApi()
        },[id])
        useEffect(()=>{
          fetchComent()
        },[id,res])
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
    <Grid item xs={6}>
    <Grid container>
  {category.map(categoria=>{
    return(
      <Grid item xs={12}>
   <div>
   <Accordion style={{margin:".5vw",backgroundColor:"rgb(240,240,240)"}}>
     <AccordionSummary
       expandIcon={<ExpandMoreIcon />}
       aria-controls="panel1a-content"
       id="panel1a-header"
     >
       <Grid container>
         <Grid item xs={2}>
         <Typography>{categoria.value }</Typography>
         </Grid>
         <Grid item xs={9}>
         {items.filter(e=>e.category === categoria.value&& e.comments>0).length >0 ?
         <Icon className="iconA" style={{color:"rgb(250,40,40)"}}>announcement</Icon>
        :  
        <Icon style={{color:"rgb(80,80,80,0)"}}>announcement</Icon>
         }  
         </Grid>
         <Grid item xs={1}>
         <Icon style={{color:"rgba(70,70,70)"}}>{categoria.icon}</Icon>
         </Grid>
       </Grid>
   
     </AccordionSummary>
     <AccordionDetails>
       <Grid justifyContent="left" container>

      
     {items.filter(e=>e.category === categoria.value).map((item,index)=>{
return(
   <>
   <Grid item xs={4}>
     <div onClick={()=>[setId(item.id),setProduct({name:item.product_name,img: item.portada})]}>
<ProductComments 
 id={item.id}
 tittle={item.product_name} 
 img={item.portada} 
 com={item.comments}

/>
</div>


</Grid>
</>
)
})}
 </Grid>
     </AccordionDetails>
   </Accordion>
   

 </div>
 </Grid>
    )
  })}      


</Grid>
    </Grid>

    <Grid item xs={5}>
<ImageList sx={{marginTop:0,position:"fixed",justyfyContent:"center",backgroundColor:"rgb(255,255,255)",borderRadius:"1vw", width: "45%", height: 600 ,marginLeft:".5vw", overflowX: "hidden"}} cols={1} rowHeight={164}> 
<div style={{backgroundColor:"rgb(240,240,240)"}}>
<Grid justifyContent="center" alignItems="center" container>
<Grid item xs={6}>
<p>Comentarios del producto: {product.name}</p>
</Grid>
<Grid item xs={2}>
<img src={product.img} style={{width:"100%"}}/>
</Grid>
</Grid>
</div>
{coments === "undefined"?
<Grid justifyContent="center" container>
  <Grid item xs={10}>
<img src="https://res.cloudinary.com/dfaaqkh9d/image/upload/v1635531754/logo/NComments_uiycgh.png" style={{width:"100%",opacity:.3}}/>
  </Grid>
</Grid>
:
<PanelComment id={id} user="admin" coments={coments} setRes={setRes}/>
}
</ImageList>
    </Grid>
</Grid>
    </>
)
}
export default CommentsAdmin