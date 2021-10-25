//formulario de inicio de session
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
import{ useUser} from '../../../context/dataProvider';
const Form =()=> {


      const Login =login() 
        const {setUserC}= useUser();
     
    

        const [values, setValues] =useState({
          user: '',
          password: ''
        });
      
        const [pass , setPass]=useState({
          password:""
        })
        const [user , setUser]=useState([])
        const[redirect,setRedirect]=useState()
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
          let url ="http://localhost:5000/login"
          axios.post(url,values)
         .then(response => {
        
        console.log(response)
        setUser(response.data.user)
        console.log(response.data.type)
        setPass(response.data)
        setRedirect(response.data.type)
        })
         
      }
      const prevent =(e)=>{
      e.preventDefault()
      }
    return(
      <div >
        {redirect ==="succesClient"? [<Redirect to="/"/>, setUserC(user)] :pass ==="succesAdmin"&& <Redirect to="/dashboard"/>}
        <Grid justifyContent="center"  container>
            <Grid item={12}>
            <div className={Login.cont_form}>
              <Grid container>
        <form onSubmit={()=>prevent()} autoComplete="on" >
            <Grid item={12}>
    
        <TextField  color="secondary"error={pass==="user" &&true} id="standard-basic"className={Login.form} onChange={handleChange('user')}label={pass==="user"?"E-mail incorrecto" :"E-mail"} />
        </Grid>
        <Grid item={12}>
        <FormControl >
          <InputLabel color="secondary"  error={pass==="pass" &&true} htmlFor="standard-adornment-password">{pass==="pass"?"Contraseña incorrecta" :"Contraseña"}</InputLabel>
          <Input 
          error={pass==="pass" &&true}  
          className={ Login.form}
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
<Grid item={12}>
<Button variant="contained" onClick={()=>enviar()} className={Login.button}color="primary">
        Iniciar sesión
      </Button>
   
        <Grid item={12}><a href="/register" style={
          {
            fontSize:"65%",
            color:"rgb(120,120,120)",
            marginBottom:"-10%",
      }}>
        ¿No tienes cuenta? Crea una
        </a>
      </Grid>
      <Grid item={12}><a href="/forgotPassword" style={
          {
            fontSize:"65%",
            color:"rgb(120,120,120)",
            marginBottom:"-10%",
      }}>
        Restablecer contraseña
        </a>
      </Grid>
      
</Grid>
     </form>
     </Grid>
     </div>
        </Grid>
        </Grid>
        </div>
    
    )
   
}


export default Form;