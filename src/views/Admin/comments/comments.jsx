import React from 'react'
import {useState,useEffect}from 'react'
import { Grid} from "@material-ui/core";
import PanelComment from './comment/comment'
import ProductComments from './product/product'
import ImageList from '@mui/material/ImageList';
import axios from 'axios'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const CommentsAdmin=({setid})=>{
      
    const [items,setItems]=useState([]);
    const [coments,setComents]=useState([])
    const [product,setProduct]=useState({
      name:"",
      img:""
    })
    const[id,setId]=useState()
    const fetchApi = async() =>{
      const url ='http://localhost:5000/'; 
        const response = await fetch(url);
        const responseJSON = await response.json();
          setItems(responseJSON);
          console.log(responseJSON)
        }

        let url =`http://localhost:5000/updateComments/${id}`
        const fetchComent = async() =>{
        
          axios.post(
            url,
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
        },[id])
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
            variacion:4
          },
          {
            categoria: 'Repuesto'  ,
            variacion:5
          },
          {
            categoria: 'Accesorio' ,  
            variacion:3
          }
        ]; 
return(
    <>
    <p>cjvkskglj</p>
    <Grid justifyContent="center" container>
    <Grid item xs={6}>
    <Grid container>
  {category.map(categoria=>{
    return(
   <div>
   <Accordion style={{margin:".5vw",backgroundColor:"rgb(240,240,240)"}}>
     <AccordionSummary
       expandIcon={<ExpandMoreIcon />}
       aria-controls="panel1a-content"
       id="panel1a-header"
     >
       <Typography>{categoria.categoria === "Seguridad"?categoria.categoria:categoria.categoria +"s"}</Typography>
     </AccordionSummary>
     <AccordionDetails>
       <Grid justifyContent="left" container>

      
     {items.filter(e=>e.category === categoria.categoria).map((item,index)=>{
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
<p>este poducto no tiene comentarios</p>
:
<PanelComment id={id} user="admin" coments={coments}/>
}
</ImageList>
    </Grid>
</Grid>
<p>{id}</p>
<p>{url}</p>
    </>
)
}
export default CommentsAdmin