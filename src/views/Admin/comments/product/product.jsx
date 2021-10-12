import React from 'react' 
import Icon from '@material-ui/core/Icon';
import { Grid} from "@material-ui/core";
import Badge from '@material-ui/core/Badge';
import{ Link} from "react-router-dom"
import {homeStyles} from '../../../../styles/home'
const ProductComments =({id,tittle,img,com})=>{
  
    const Home =homeStyles();

    return(
        <>
            <div className="appp">
       
       <div>
     
   
     <div className={Home.slider}>
       <div className="container">
     
     <Grid container spacing={0}>

     <div className="items">



<img src={img}className={Home.itemsImg} />


   </div>  
     <Grid item xs={7} >
     <p className="tittle_product">{tittle}</p>
     </Grid>
     <Grid item xs={5} >
     <Badge color="secondary" style={{marginTop:15}} badgeContent={com}  >
<Icon style={{color:"rgb(80,80,80)"}}>question_answer</Icon>
</Badge>
     </Grid>

     <Grid item xs={12} >
       <div className="cont_button">
      <Grid container>
        <Grid item xs={9}>
       <a href className="text_button" >
     Ver comentarios
       </a>
       </Grid>
       <Grid  item xs={2}>
       <Icon className="icon_product">arrow_forward</Icon>
       </Grid>
       </Grid>
       </div>
     </Grid>
</Grid>

</div>
</div>
    
   
    </div>
   </div>
        </>
    )
}
export default ProductComments