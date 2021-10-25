//estructura de cada tarjeta q contiene cada producto
import '../styles/slide.css'
import Icon from '@material-ui/core/Icon';
import { Grid} from "@material-ui/core";
import {homeStyles} from '../styles/home'
import{ Link} from "react-router-dom"
const Product =({id,tittle,img,price,description})=> {
const Home =homeStyles();
  return (
    <div className="appp">
       
        <div>
      
    
      <div className={Home.slider}>
        <div className="container">
        <Link
                     to={`/product/${id}`}
                     >
      <Grid justifyContent="center" container spacing={0}>

      <div className="items">
 


 <img src={img}className={Home.itemsImg} />
 

    </div>  
    <Grid item xs={10} >
      <p style={{
        margin:0,
        paddingTop:5,
        fontSize:"1.4vw",
        color:"rgb(78,78,78)"
        }} >
          {price} $
          </p>
      </Grid>
      <Grid item xs={12} >
      <p style={{marginBottom:"0"}}className="tittle_product">{tittle}</p>
      </Grid>

   

 
      <Grid item xs={12} >
        <div className="cont_button">
       <Grid justifyContent="center" container>
         <Grid item xs={9}>
        <a href style={{marginTop:".2vw"}} >
      Ver producto
        </a>
        </Grid>
        <Grid  item xs={2}>
        <Icon className="icon_product">arrow_forward</Icon>
        </Grid>
        </Grid>
        </div>
      </Grid>
</Grid>
</Link>
</div>
</div>
     
    
     </div>
    </div>
  );
}

export default Product;