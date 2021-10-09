import React from 'react'
import { useState,useEffect } from 'react';
import { Grid,TextField,InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import {login} from '../../../styles/formulario'
import { Redirect } from 'react-router';
const Form =()=>{
    const Login =login() 
        
     
    
        const [acount,setAcount]=useState()
        const [restore,setRestore]=useState()
        const [values, setValues] =useState({
          email: '',
          pass:''
      
        });
      
       
        const handleChange = (prop) => (event) => {
          setValues({ ...values, [prop]: event.target.value });
        };
      
        const handleClickShowPassword = () => {
          setValues({ ...values, showPassword: !values.showPassword });
        };
      
        const handleMouseDownPassword = (event) => {
          event.preventDefault();
        };
        const enviar=()=>{
          let url ="http://localhost:5000/verifyEmail"
          axios.post(url,values)
         .then(response => {
        
     setAcount(response.data)
     console.log(response.data)
        })
         
      }
      const restablecer=()=>{
        let url ="http://localhost:5000/restore"
        axios.post(url,values)
       .then(response => {
      
    setRestore(response.data)
   console.log(response.data)
      })
       
    }
      const prevent =(e)=>{
      e.preventDefault()
      }
    return(
<>
<div >
    {restore ==='ok' ?<Redirect to="/"/>:acount === 'ok'? 
         <Grid justifyContent="center"  container>
           
            <Grid item={12}>
            <div className={Login.cont_form}>

              <Grid container>
            
             


        <form onSubmit={()=>prevent()} autoComplete="on" >
      <p>Recuperar contraseña</p>
            <Grid item={12}>
    
            <FormControl >
          <InputLabel color="secondary"   htmlFor="standard-adornment-password">Nueva contraseña</InputLabel>
          <Input 
       
            className={Login.form}
            id="standard-adornment-password"
            color="secondary"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('pass')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
           </Grid>
        
<Grid item={12}>
<Button variant="contained" onClick={()=>restablecer()} className={Login.button}color="primary">
       Restablecer
      </Button>
   
      
      
</Grid>

     </form>
    
     </Grid>
     </div>
        </Grid>
        </Grid>
        :
        <Grid justifyContent="center"  container>
           
        <Grid item={12}>
        <div className={Login.cont_form}>

          <Grid container>
        
         


    <form onSubmit={()=>prevent()} autoComplete="on" >
  <p>Recuperar contraseña</p>
        <Grid item={12}>

    <TextField  color="secondary"error={acount==="undefined" &&true} id="standard-basic"className={Login.form} onChange={handleChange('email')}label={acount==="undefined"?" E-mail inválido" :"Ingrese su E-mail"} />
    </Grid>
    
<Grid item={12}>
<Button variant="contained" onClick={()=>enviar()} className={Login.button}color="primary">
    Verificar
  </Button>

  
  
</Grid>

 </form>

 </Grid>
 </div>
    </Grid>
    </Grid>

}
        </div>
</>

    )
}
export default Form