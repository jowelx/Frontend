//esto verifica si hay un usuario logeado
import React from 'react'
import {navbar} from '../../styles/navbar';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import{ Link} from "react-router-dom"

const UserLoged = ({user })=>{
    const NavBar = navbar()
  
    console.log("usuario "+user)
return(
    <>
    {user !== "" ? 
    <Link
    to={'/user'}
    >
    <p  
    className={NavBar.button}>{user}
    </p> 
    </Link>
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