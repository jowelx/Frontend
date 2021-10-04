//esto verifica si hay un usuario logeado
import React from 'react'
import {navbar} from '../../styles/navbar';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import{ useUser} from '../../context/dataProvider';
const UserLoged = ({state })=>{
    const NavBar = navbar()
    const {user} = useUser()
    console.log("usuario "+user)
return(
    <>
    {user !== "" ? <p  className={NavBar.button}>{user}</p> :
  <Button
    className={NavBar.button}
    variant="outlined"
    color="primary"
    
    endIcon={<Icon>login</Icon>}
  >
          Acceder
  </Button>
    } 
    </>
)
}


export default UserLoged