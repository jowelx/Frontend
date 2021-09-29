import { useState,useEffect } from 'react';
import { Grid } from "@material-ui/core";
import "../../../styles/product.css"
import Details from './details'
import Images from './images'
const ProductId =(props)=> {
    
    const url =`http://localhost:5000/product/${props.match.params.id}`;
    const product = props.match.params.id
    const [info,setInfo]=useState([]);
    const [images,setImages]=useState([]);
    const [index,setIndex]=useState(0)
    const [active,setActive]=useState(1)
    const fetchApi = async() =>{
    const response = await fetch(url);
    const responseJSON = await response.json();
    setImages(responseJSON[0].imagenes)
      setInfo(responseJSON[0].productInfo)
    }
    console.log(images)
    useEffect(()=>{
      fetchApi()
    },[])

 console.log(index)
    return(
     
        <>
        
        <div>
       
  <Grid justifyContent="center" container >
  <Grid item xs={8}>
  <div className="cont_Product">
<Grid direction="row" container>
<Grid item xs={4}>
{info.length >0 &&
<Details
 name={info[0].product_name}
 model={info[0].model}
 year={info[0].year}
 state={info[0].state}
 price={info[0].price}
 brand={info[0].brand}
 />
}
</Grid>
<Grid item xs={8}>
{images.length >0 &&
 <Images
 images={images}
 />
}
</Grid>
</Grid>
</div>
</Grid>
</Grid>
</div>

        </>
    )
}

export default  ProductId;