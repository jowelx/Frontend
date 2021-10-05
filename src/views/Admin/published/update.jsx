import React from 'react';
import { Button, Grid, ButtonGroup,TextField,InputLabel,MenuItem,IconButton,Icon } from "@material-ui/core";
import { useState ,useEffect} from "react";

import CircularProgress from '@material-ui/core/CircularProgress';
import ImageUploading from "react-images-uploading";
import axios from 'axios'

const Update =(props)=>{
    const url =`http://localhost:5000/product/${props.match.params.id}`;
    const [info,setInfo]=useState([]);
    const [images,setImages]=useState([]);
    const [portada,setPortada]=useState()
    const [loading,setLoading] = useState()
    const [data,setData]=useState({
      name_product:"",
      brand:"",
      state:"",
      model:"",
      price:"",
      year:"",
      description:"",
      amount:""
} )
    const [res, setRes]=useState();
    const fetchApi = async() =>{
        const response = await fetch(url);
        const responseJSON = await response.json();
        setImages(responseJSON[0].productInfo)
          setInfo(responseJSON[0].productInfo)
          setData({
            name_product:responseJSON[0].productInfo[0].product_name,
            brand:responseJSON[0].productInfo[0].brand,
            state:responseJSON[0].productInfo[0].state,
            model:responseJSON[0].productInfo[0].model,
            price:responseJSON[0].productInfo[0].price,
            year:responseJSON[0].productInfo[0].year,
            description:responseJSON[0].productInfo[0].description_product,
            amount:responseJSON[0].productInfo[0].amount
          })
      }
        console.log(images)
        useEffect(()=>{
          fetchApi()

        },[])

     
  
const enviar=()=>{
  
    setLoading(true)
      let url =`http://localhost:5000/upload/${props.match.params.id}`
      axios.post(
        url,
        {"file":images,
        "data":data,
       
      } 
      )
     .then(response => { setRes(response.data)
   console.log(response.data)
   if(response.data === "ok"){
   setLoading(false)
   }
    })
}  
      const maxNumber = 1;
      const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
      };
      const currencies = [
        {
          value: 'Nuevo',
          label: 'Nuevo',
        },
        {
          value: 'Usado',
          label: 'Usado',
        }
      ]; 
      const handleChangeData = (prop) => (event) => {
        setData({ ...data, [prop]: event.target.value });
      };

      return (
          <>
        {info.length> 0 &&
        
          <>
          {loading=== true ? <div className="cargando"><CircularProgress color="primary" /><p>Publicando</p></div>:res==="ok" }
        
          <Grid justifyContent="center" container>
             <Grid item xs={8}>
        <div className="App">
        
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="portada"
          >
            {({
              imageList,
              onImageUpload,
              onImageUpdate,
              onImageRemove,
              isDragging,         
            }) => (
             <>    
              <div className="upload__image-wrapper">
                 <Grid justifyContent="center" container>
              <Grid item md={12}>
                <p className="tittle">Publicar producto</p>
                   </Grid>
                <Grid item md={6}>
                  <div className="cont_input">
                  <Grid spacing={2} container>                
                    <Grid item md={12}>
            <TextField value={data.name_product} onChange={handleChangeData('name_product')} className="input"type="text" label="Nombre del producto"/>
            </Grid>
            <Grid item md={12}>
            <TextField value={data.brand} onChange={handleChangeData('brand')} className="input"type="text" label="Marca"/>
            </Grid> 
            <Grid item md={12}>
            <TextField value={data.amount} onChange={handleChangeData('amount')} className="input"type="text" label="Cantidad"/>
            </Grid>                   
            <Grid item md={12}>
            <TextField 
            style={{textAlign:"left"}} 
            value={data.state}
            onChange={handleChangeData('state')} 
            select 
            id="standard-select-currency" 
            className="input"
            type="text" 
            label="Estado">       
             {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}</TextField>
            </Grid>  
            <Grid item md={12}>
            <TextField        
             value={data.model}
            onChange={handleChangeData('model')}  className="input"type="text" label="Modelo del producto"/>
            </Grid>              
                <Grid item md={6}>
            <TextField         
             value={data.price}
             onChange={handleChangeData('price')} 
             className="input"
             type="text" 
             label="Precio"/>
            </Grid>               
                       
               <Grid item md={6}>
            <TextField      
              value={data.year}
              onChange={handleChangeData('year')}  
              className="input"
              type="text" 
              label="Año"/>
            </Grid> 
           
            <Grid item md={12}>
  
            <TextField 
            id="standard-multiline-static"  
            value={data.description}
            onChange={handleChangeData('description')}  
            className="input"
            variant="outlined"
            type="text" 
            rows={2}
            multiline
            label="Descripción del producto"/>
            </Grid>     
            </Grid>
            </div>
            </Grid>
                   
            <Grid item md={6}>
             <Grid justifyContent="center" container>
             <Grid item md={12}>
           <div style={{height:"30vw",marginTop:"2vw"}}>
              {imageList.map((image, index) => (

                             
                
                <div key={index} >
                
                  <Grid  container>
                    <Grid  item md={12}>
                    <div className="cont_img">
                  <img src={image.portada} alt=""  />
                  </div>
                  </Grid>
                  <Grid justifyContent="center" item md={12}>

            
                  </Grid>
                  </Grid>
                  
                </div>
               
              ))}
             
             </div>
             </Grid>
              <ButtonGroup 
              variant="contained" 
              color="primary" 
              aria-label="contained primary button group"
              className="Button"
              >
  

              <Button 
              variant="contained"
              color="primary"
              size="small"
              onClick={() => onImageUpdate(0)}
              style={isDragging ? { color: "red" } : null}
              disabled={images.length ===1 ?false: true }
              >
               cambiar imagen
              </Button>
              <Button 
              variant="contained"
              color="primary"
              size="small"
              onClick={() => onImageRemove(0)}
              style={isDragging ? { color: "red" } : null}
              disabled={images.length ===1 ?false: true }
              >
              borrar imagen
              </Button>
              <Button 
              variant="contained"
              color="primary"
              size="small"
              disabled={images.length ===1 ? true : false}
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
               
              >
                Subir imagen
              </Button>

                 </ButtonGroup>
                 </Grid>
              </Grid>
                </Grid>
                <Grid  item md={12}>
                  <div className="Button" >
                <Button  
                size="large"   
                variant="contained"
                color="primary"
                onClick={()=>enviar()}
                >
                  Guardar
                   </Button>
                   </div>
                </Grid>
              </div>
              </>
            )}
          </ImageUploading>
        </div>
        </Grid>
      </Grid>
      <p>{data.name_product}</p>
      </>
              }
        </>
          
      );
}
export default Update