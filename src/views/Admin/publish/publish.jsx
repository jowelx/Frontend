//vista para publicar productos
import { Button, Grid, ButtonGroup,TextField,InputLabel,MenuItem,IconButton,Icon } from "@material-ui/core";
import { useState } from "react";
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ImageUploading from "react-images-uploading";
import axios from 'axios'
import "./styles.css";
import {useUser} from '../../../context/dataProvider'
import Slide from '@mui/material/Slide';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';


const Publish= ({View})=>{
    const {url} = useUser();
    const [images, setImages] = React.useState([]);
    const [loading,setLoading] = useState()
    const [res, setRes]=useState({
    message:"",
    open:false
    });
    const [portada,setPortada]=useState()
    const [data,setData]=useState({
      name_product:"",
      brand:"",
      state:"",
      model:"",
      price:"",
      year:"",
      description:"",
      amount:"",
      category:""
   } )
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
    const category = [
      {
      value: 'Accesorios',
      label: 'Accesorios',
      icon:'sell'
    },
    {
      value: 'Baterias',
      label: 'Baterias',
      icon:'charging_station'
    },
      {
        value: 'Cauchos',
        label: 'Cauchos',
        icon:'local_shipping'
      },
      {
        value: 'Ferreteria',
        label: 'Ferreteria',
        icon:'handyman'
      },
      {
        value: 'Filtros',
        label: 'Filtros',
        icon:'filter_alt'
      },
      {
        value: 'Frenos',
        label: 'Frenos',
        icon:'build'
      },
      {
        value: 'Limpieza',
        label: 'Limpieza',
        icon:'cleaning_services'
      },
      {
        value: 'lubricantes',
        label: 'lubricantes',
        icon:'opacity'
      },
      {
        value: 'Parches',
        label: 'Parches',
        icon:'grid_4x4'
      },
      {
        value: 'Refrigerantes',
        label: 'Refrigerantes',
        icon:'ac_unit'
      },
      {
        value: 'Repuestos',
        label: 'Repuestos',
        icon:'miscellaneous_services'
      },
    ]; 
    const handleChangeData = (prop) => (event) => {
      setData({ ...data, [prop]: event.target.value });
    };
    function SlideTransition(props) {
      return <Slide {...props} direction="up" />;
    }

    const [snackPack, setSnackPack] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [messageInfo, setMessageInfo] = React.useState(undefined);
  
    React.useEffect(() => {
      if (snackPack.length && !messageInfo) {
        // Set a new snack when we don't have an active one
        setMessageInfo({ ...snackPack[0] });
        setSnackPack((prev) => prev.slice(1));
        setOpen(true);
      } else if (snackPack.length && messageInfo && open) {
        // Close an active snack when a new one is added
        setOpen(false);
      }
    }, [snackPack, messageInfo, open]);
  
    const handleClick = (message) => () => {
      setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
  
    const handleExited = () => {
      setMessageInfo(undefined);
    };
    const enviar=()=>{
      setLoading(true)
        let urle =url+"upload"
        axios.post(
          urle,
          {"file":images,
          "data":data,
          "portada":portada
        } 
        )
       .then(response => { 
     
     if(response.data === "ok"){
      setRes({
        message:"Tu producto se ha subido correctamente",
        open:true
      })
      setOpen(true)
      handleClick('Tu producto se ha subido correctamente')
       setImages("")
       setData({
          name_product:"",
          brand:"",
          state:"",
          model:"",
          price:"",
          year:"",
          description:"",
          amount:"",
          category:""  
       })
     setLoading(false)
     }
      })
       
    }
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    return (
        <>
        {loading=== true && <div className="cargando"><CircularProgress color="primary" /><p>Publicando</p></div> }

        <Grid justifyContent="center" container>
           <Grid item xs={8}>
      <div className="App">
      {//CHE PUTO
      }
        <ImageUploading
          multiple
          value={images}
          onChange={ onChange}
          maxNumber={maxNumber}
          dataURLKey="path"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps
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
          <TextField value={data.name_product} onChange={handleChangeData('name_product')}  className="input"type="text" label="Nombre del producto"/>
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
                      <Grid container>
                <Grid item xs={10}>
              {option.label}
              </Grid>
              <Grid item xs={2}>
              <Icon style={{color:"rgb(80,80,80)"}}>{option.icon}</Icon>
              </Grid>
              </Grid>
            </MenuItem>
          ))}</TextField>
          </Grid>  
          <Grid item md={12}>
          <TextField 
          style={{textAlign:"left"}} 
          value={data.category}
          onChange={handleChangeData('category')} 
          select
          id="standard-select-currency" 
          className="input"
          type="text" 
          label="Categoria">       
           {category.map((option) => (
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
          rows={4}
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
                  <img src={image.path} alt=""  />
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
             
               onClick={()=>enviar()}>
                 Publicar
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
 <Grid container>
<Grid item xs={12}>
<Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }}
       
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Tu producto se ha subido correctamente
        </Alert>
        </Snackbar>
       </Grid>
 </Grid>
      </>
    );
}
export default Publish;