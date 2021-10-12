//lista de productos publicados
import { useState,useEffect } from 'react';
import { Grid,IconButton,Icon } from "@material-ui/core";
import { Redirect,Link} from "react-router-dom";
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
const Published =()=> {
    const classes = useStyles();
    const url ='http://localhost:5000/';
    const [items,setItems]=useState([]);
    const[ refresh, setRefresh] =useState( "ok")
    const fetchApi = async() =>{
      const response = await fetch(url);
    
      const responseJSON = await response.json();
      setItems(responseJSON);
      console.log(responseJSON)
    }
    useEffect(()=>{
      fetchApi()
    },[refresh])
    const Delete =(id)=>{
      const url_Delete =`http://localhost:5000/delete/${id}`
      axios.post(
        url_Delete,
        {"file":id
     
      })
     .then(response => { setRefresh( response)
 
   
    })
    }
const redirect=()=>{
 return <Redirect to="/" />
}
    return(
        <>
        <div style={{marginTop:"4vw"}}>
<Grid justifyContent="center" container>
    <Grid item xs={10}>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Precio</StyledTableCell>
            <StyledTableCell align="center">Marca</StyledTableCell>
            <StyledTableCell align="center">Cantidad</StyledTableCell>
            <StyledTableCell align="center">Modelo</StyledTableCell>
            <StyledTableCell align="center">Año</StyledTableCell>
            <StyledTableCell align="center">Portada</StyledTableCell>
            <StyledTableCell align="center">Estado</StyledTableCell>
            <StyledTableCell align="center">Herramientas</StyledTableCell>
      
          </TableRow>
        </TableHead>
        <TableBody >
          {items.map((item, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index}
              </StyledTableCell>
              <StyledTableCell align="center"> {item.product_name}</StyledTableCell>
            
              <StyledTableCell align="center">{item.price}</StyledTableCell>
              <StyledTableCell align="center">{item.brand}</StyledTableCell>
              <StyledTableCell align="center">{item.amount}</StyledTableCell>
              <StyledTableCell align="center">{item.model}</StyledTableCell>
        
              <StyledTableCell align="center">{item.year}</StyledTableCell>
              <StyledTableCell align="center"><img style={{maxWidth:80}}src={item.portada}/></StyledTableCell>
       
              <StyledTableCell align="center">{item.state}</StyledTableCell>
              <StyledTableCell align="center">
                  <Grid container spacing={1}>
                      <Grid item xs={6}> 
                      <Link
                     to={`/Update/${item.id}`}
                     >            
                      <IconButton  className="cont_icon"  aria-label="add to shopping cart">
                           <Icon className="icon_Edit">search</Icon>
                      </IconButton>
                      </Link>
                      </Grid>
                  <Grid item xs={6}>   
                  <IconButton className="cont_icon"  aria-label="add to shopping cart">
                    <Icon onClick={()=>Delete(item.id)} className="icon_Delete">delete</Icon>
                  </IconButton>
                  </Grid>
                  </Grid>
 
    
              </StyledTableCell>
       
                  </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
    </Grid>
</Grid>
</div>
    </>
  );
}


export default  Published;


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  marginBottom: 20
});
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);