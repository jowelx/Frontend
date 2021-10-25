//vista del producto seleccionado
import { useState,useEffect } from 'react';
import { Grid } from "@material-ui/core";
import "../../../styles/product.css"
import Details from './details'
import Images from './images'
import Comments from '../../../components/coments'
import{ useUser} from '../../../context/dataProvider';
const ProductId =(props)=> {  
    const {user} = useUser()
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
    {info.length >0 &&
    <>
        <div style={{marginTop:"1vw"}}>
       
  <Grid justifyContent="center" container >
  <Grid item xs={8}>
  <div className="cont_Product">
<Grid direction="row" container>
<Grid item xs={4}>

<Details
 id={info[0].id}
 name={info[0].product_name}
 model={info[0].model}
 year={info[0].year}
 state={info[0].state}
 price={info[0].price}
 brand={info[0].brand}
 amount={info[0].amount}
 description={info[0].description_product}
 category={info[0].category}
 />

</Grid>
<Grid item xs={8}>

 <Images
 images={info[0].portada}
 />

</Grid>
</Grid>
</div>
</Grid>
</Grid>
</div>
< Comments id={info[0].id}user={user}/>
</>
}


        </>
    )
}

export default  ProductId;