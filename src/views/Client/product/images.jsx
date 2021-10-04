//imagenes del producto
import { useState } from 'react';
import { Grid,IconButton} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx'
import "../../../styles/product.css"
const Images =({images})=> {
    const [index,setIndex]=useState(0)
    return(
     <>
  <div className="cont_img_product">
<Grid  justifyContent="center" container>
  <Grid item xs={12}>
<div className="contImg_product">
<img className="Img" src={images[index].URL}/>
<div className="cont_Button">
<IconButton
className="button"
    disabled={index === 0 ? true:false}
    variant="outlined"
    style={index ===0  ?{color:"rgb(180,180,180)"}:{color:"rgb(20,20,20)"}}
 
    onClick={()=>setIndex(index-1)}
  
  >
         <Icon >chevron_left</Icon> 
  </IconButton>
  <IconButton
className="button"
    disabled={index+1 ===images.length  ? true:false}
    variant="outlined"
        style={index+1 ===images.length  ?{color:"rgb(180,180,180)"}:{color:"rgb(20,20,20)"}}
    onClick={()=>setIndex(index+1)}
  
  >
      <Icon>chevron_right</Icon>    
  </IconButton>
</div>
</div>
</Grid>
<div className="cont_point">
  <Grid item xs={12}>
<Grid justifyContent="center" container>
{images.map((item,indexi)=>{
  return(
<Grid item xs={1}>

  <div  className={clsx("point", indexi === index?"active":"standar")}></div>
  </Grid>
  )
})}
</Grid>
</Grid>
</div>
</Grid>
</div>



        </>
    )
}

export default  Images;