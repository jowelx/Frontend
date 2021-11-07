//vista del producto seleccionado
import { useState,useEffect } from 'react';
import { Grid } from "@material-ui/core";
import "../../../styles/product.css"
import Details from './details'
import Product from '../../../components/product'
import Images from './images'
import Carousel from 'react-elastic-carousel';
import Comments from '../../../components/coments'
import{ useUser} from '../../../context/dataProvider';
import { fontStyles }from '../../../styles/fonts'
import clsx from 'clsx'
const ProductId =(props)=> { 
  const font = fontStyles(); 
    const {user,url} = useUser()
       const product = props.match.params.id
    const [info,setInfo]=useState([]);
    const [images,setImages]=useState([]);
    const [index,setIndex]=useState(0)
    const [products,setProducts]=useState([])
    const fetchProducts = async() =>{
     
      const response = await fetch(url);
      const responseJSON = await response.json();
      setProducts(responseJSON);
       
      }
    const fetchApi = async() =>{
    const response = await fetch(url +`product/${props.match.params.id}`);
    const responseJSON = await response.json();
    setImages(responseJSON[0].imagenes)
      setInfo(responseJSON[0].productInfo)
    }
    console.log(images)
    useEffect(()=>{
      fetchApi()
    },[props])
    useEffect(()=>{
      fetchProducts()
    },[])
 console.log(index)
    return(
    <>
    {info.length >0 &&
    <>
  <div style={{marginTop:"1vw"}}>    
  <Grid justifyContent="center" container >
  <Grid item xs={12} md={8}>
  <div className="cont_Product">
  <Grid direction="row" container>
  <Grid item xs={12} md={8}>
  <Images
  images={info[0].portada}
  />
</Grid>
  <Grid item xs={12} md={4}>
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

</Grid>
</div>
</Grid>

<Grid item xs={10}>
<p className={clsx(font.font600,"p3")}>Productos relacionados con {info[0].category}</p>


</Grid>
<Grid item xs={12}>
              <Carousel      
    breakPoints={[
      {width: 1, itemsToShow:1},
      {width: 350, itemsToShow:2},
      {width: 768, itemsToShow:4}
     ]}
   
               transitionMs={500}         
               pagination={false}
               easing="linear"
               >
                 {products.filter(e=>e.category === info[0].category&&e.amount >0 &&e.id !=info[0].id ).map(item =>{                 
                    return(
                         <>  

                         <Product 
                           id={item.id}
                         tittle={item.product_name} 
                         img={item.portada} 
                         description={item.description_product}
                         price={item.price} />   
                          </>
                     )
                 })
             }  
               </Carousel>

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