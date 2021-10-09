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
<img className="Img" src={images}/>

</div>
</Grid>
<div className="cont_point">
  <Grid item xs={12}>
<Grid justifyContent="center" container>

</Grid>
</Grid>
</div>
</Grid>
</div>



        </>
    )
}

export default  Images;