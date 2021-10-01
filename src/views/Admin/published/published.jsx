import { useState,useEffect } from 'react';
import { Grid,Typography,IconButton,Icon } from "@material-ui/core";
import ListProduct from '../../../components/listProduct'
import { Redirect, Route } from "react-router-dom";
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
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
const Published =()=> {

const classes = useStyles();
    const url ='http://localhost:5000/';
    const [items,setItems]=useState([]);
    const fetchApi = async() =>{
      const response = await fetch(url);
    
      const responseJSON = await response.json();
      setItems(responseJSON);
      console.log(responseJSON)
    }
    useEffect(()=>{
      fetchApi()
    },[])
const redirect=()=>{
 return <Redirect to="/" />
}
    return(
        <>
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
        <TableBody>
          {items.map((item, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index}
              </StyledTableCell>
              <StyledTableCell align="center"> {item.file.product_name}</StyledTableCell>
            
              <StyledTableCell align="center">{item.file.price}</StyledTableCell>
              <StyledTableCell align="center">{item.file.brand}</StyledTableCell>
              <StyledTableCell align="center">{item.file.amount}</StyledTableCell>
              <StyledTableCell align="center">{item.file.model}</StyledTableCell>
        
              <StyledTableCell align="center">{item.file.year}</StyledTableCell>
              <StyledTableCell align="center"><img style={{maxWidth:80}}src={item.file.portada}/></StyledTableCell>
       
              <StyledTableCell align="center">{item.file.state}</StyledTableCell>
              <StyledTableCell align="center">
                  <Grid container spacing={1}>
                      <Grid item xs={6}>             <IconButton  className="cont_icon"  aria-label="add to shopping cart">
       <Icon className="icon_Edit">edit</Icon>
      </IconButton></Grid>
                  <Grid item xs={6}>   <IconButton className="cont_icon"  aria-label="add to shopping cart">
       <Icon className="icon_Delete">delete</Icon>
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
    </>
  );
}


export default  Published;