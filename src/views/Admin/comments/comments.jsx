import React from 'react'
import {useState,useEffect}from 'react'
import { Grid} from "@material-ui/core";
import PanelComment from './comment/comment'
import ProductComments from './product/product'
import ImageList from '@mui/material/ImageList';
import axios from 'axios'
const CommentsAdmin=({setid})=>{
      
    const [items,setItems]=useState([]);
    const [coments,setComents]=useState([])
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
return(
    <>
    <p>cjvkskglj</p>
    <Grid container>
    <Grid item xs={7}>
    <Grid container>
        
{items.map((item,index)=>{
return(
   <>
   <Grid item xs={3}>
     <div onClick={()=>[setId(item.id)]}>
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
</Grid>
<Grid item xs={5}>
<ImageList sx={{backgroundColor:"rgb(255,255,255)",borderRadius:"1vw", width: "100%", height: 500 ,marginLeft:"-1.5vw",paddingRight:"1vw"}} cols={1} rowHeight={164}>
     
  
<PanelComment id={id} user="admin" coments={coments}/>
</ImageList>
</Grid>
</Grid>
<p>{id}</p>
<p>{url}</p>
    </>
)
}
export default CommentsAdmin