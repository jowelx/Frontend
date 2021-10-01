import '../styles/slide.css'
import Icon from '@material-ui/core/Icon';
import { Grid,Typography } from "@material-ui/core";
import { useState,useEffect } from 'react';
import {homeStyles} from '../styles/home'
const ListProduct =({tittle,img,price,amount,brand,state,model})=> {
  const Home =homeStyles();


 
 
  

  return (
    <div >
   
          <div style={{borderBottom:"solid .1vw",margin:0}}>
       <Grid justifyContent="center" container>
           <Grid item xs={2}>
             <div >
<p>{tittle}</p>
</div>
           </Grid>
           <Grid item xs={2}>
           <div >
<p>{price}</p>
</div>
           </Grid>
           <Grid item xs={1}>
           <div >
<p>{amount}</p>
</div>
           </Grid>
           <Grid item xs={1}>
           <div >
<p>{brand}</p>
</div>
           </Grid>
           <Grid item xs={2}>
           <div >
<p>{state}</p>
</div>
           </Grid>
           <Grid item xs={2}>
           <div >
<p>{model}</p>
</div>
           </Grid>
           <Grid item xs={2}>
             <div style={{height:"100%",justifyContent:"center",alignItems:"center"}}>
<img style={{maxWidth:"50%",maxHeight:"90%",width:"auto",height:"auto"}} src={img}/>
</div>
           </Grid>
       </Grid>
       </div>
  
    </div>
  );
}

export default ListProduct;