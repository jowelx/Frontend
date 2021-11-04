//esto verifica si hay un usuario logeado
import React from 'react'
import { useState,useEffect } from 'react';
import { Grid,TextField,InputLabel } from "@material-ui/core";
import {navbar} from '../../styles/navbar';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import{ Link} from "react-router-dom"
import axios from 'axios'
import { Redirect } from 'react-router';
import {useUser} from '../../context/dataProvider'
const UserLoged = ({user })=>{
  const {url}= useUser()
    const NavBar = navbar()
    const enviar=()=>{
      const urle=url+"loguot"
      axios.post(urle,"values")
setRef(true)
    }
const [ref,setRef]=useState(false);
    console.log("usuario "+user)
return(
    <>
    {ref=== true &&<Redirect to="/xxx"/>}
    {user !== "" ? 
    <>
<Grid  justifyContent="center" alignItems="center" container>
  <Grid item xs={6}>
    <Link
    to={'/user'}
    >
    <p  
    className={NavBar.button}>{user}
    </p> 
    </Link>
    </Grid>
    <Grid item xs={6}>
    <Button
    className={NavBar.button}
    variant="outlined"
    color="primary"
    onClick={()=>enviar()}
    endIcon={<Icon>login</Icon>}
  >
     logout
  </Button>
  </Grid>
  </Grid>
    </>
    :
<Link
 to={`/login`}
>
  <Button
    className={NavBar.button}
    variant="outlined"
    color="primary"
    
    endIcon={<Icon>login</Icon>}
  >
          Acceder
  </Button>
  </Link>
    } 
    </>
)
}


export default UserLoged