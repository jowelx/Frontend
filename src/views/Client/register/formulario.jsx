//formulario de registro de usuario
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
import {register} from '../../../styles/formulario'
import { Redirect } from 'react-router';
const Form =()=> {


      const Register = register() 
        
     const [passValidation,setPassvalidation]=useState()
    

        const [values, setValues] =useState({
          passwordRepeat: '',
          password: '',
          user:'',
          name:'',
          mail:''
        });
      
        const [res , setRes]=useState()

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
          let url ="http://localhost:5000/register"
          axios.post(url,values
            
          )
         .then(response => {setRes(response.data)
        console.log(res)
        })
         
      }
      const prevent =(e)=>{
      e.preventDefault()
      }
    return(
      <div >
       
        {res === "succes"&& <Redirect to="/"/> }
        <Grid justifyContent="center"  container>
            <Grid  item md={12}>
            <div className={Register.cont_form}>
              
        <form onSubmit={()=>prevent()} autoComplete="off" >
        <Grid container spacing={3}justifyContent="center">
        <Grid item md={6}>
    
    <TextField  color="secondary"error={res==="name" ?true:false} id="standard-basic"className={Register.form}value={values.name} onChange={handleChange('name')}label="Nombre" />
    </Grid>
            <Grid item md={6}>
    
        <TextField  color="secondary"error={res==="user" ?true:false} id="standard-basic"className={Register.form}value={values.user} onChange={handleChange('user')}label="Usuario" />
        </Grid>
        <Grid item md={12}>
    
    <TextField  color="secondary"error={res==="correo" ?true:false} id="standard-basic"className={Register.form} value={values.mail} onChange={handleChange('mail')}label="E-Mail" />
    </Grid>
        <Grid item md={12}>
        <FormControl   className={ Register.form}>
          <InputLabel color="secondary"    error={passValidation=== false ?true:false}  htmlFor="standard-adornment-password">{passValidation=== false ? "Las contraseñas no coinciden":" Contraseña"}</InputLabel>
          <Input 
           error={passValidation=== false ?true:false} 
         
            id="standard-adornment-password"
            color="secondary"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
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
        <Grid item md={12}>
        <FormControl  className={ Register.form}>
          <InputLabel color="secondary"    error={passValidation=== false ?true:false}  htmlFor="standard-adornment-password">{passValidation=== false ? "Las contraseñas no coinciden":"Repetir Contraseña"}</InputLabel>
          <Input 
          error={passValidation=== false?true:false}  
         
            id="standard-adornment-password"
            color="secondary"
            type={values.showPassword ? 'text' : 'password'}
            value={values.passwordRepeat}
            onChange={handleChange('passwordRepeat')}
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
<Grid item md={12}>
<Button variant="contained" onClick={()=>values.password === values.passwordRepeat ? [setPassvalidation(true)  ,enviar()]:setPassvalidation(false)} className={Register.button}color="primary">
        Crear cuenta
      </Button>
   

      
</Grid>
</Grid>
     </form>
    

     </div>
        </Grid>
        </Grid>
        </div>
    
    )
   
}

export default Form;