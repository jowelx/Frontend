import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { useState,useEffect } from 'react';
import { Grid,Button,Divider,Icon } from '@material-ui/core'
import {Elements,CardElement,useStripe,useElements}from '@stripe/react-stripe-js'
import {useUser}from '../../../context/dataProvider'
import CircularProgress from '@material-ui/core/CircularProgress';
import "./stripe.css"
import { Redirect } from 'react-router';
import axios from 'axios'
const Formstripe = ()=>{
       
        const {url,user}=useUser();
        const [info,setInfo]=useState([])
        const[loading,setLoading]=useState(false)
        const [red,setRed]=useState(false)
        const fetchApi = async() =>{
        const response = await fetch(url+`cart/${user}`);
        const responseJSON = await response.json();

          setInfo(responseJSON)
        }
        useEffect(()=>{
            fetchApi()
        },[])
        let amounts = 0;
        let price=0;
        let nombres="";
    const stripe = useStripe();
    const elements = useElements();

   const handleSubmit = (amount)=>async(e)=>{
  e.preventDefault();
  setLoading(true)
    const {error,paymentMethod} = await stripe.createPaymentMethod({
    type:'card',
    card:elements.getElement(CardElement)
})
if(!error){
    console.log(paymentMethod)
    const {id}=paymentMethod;
    const {data}= await axios.post(`${url}payment`,{
        user,
        id,
        amount:amount*100
    })
    console.log(data)
    if(data.message ==="Succesfull payment"){
        setLoading(false)
        setRed(true)
    }
}else{
    console.log(error)
}
   }
    return(
        <>
        {red===  true &&  <Redirect to="/"/>}
         {loading=== true && <div className="cargando"><CircularProgress color="primary" /><p>Cargando</p></div> }

        <Grid justifyContent="center" container>
            <Grid item md={5}>
            <div style={{
                marginTop:100,
                marginBottom:100,
                padding:40,
                backgroundColor:"rgb(240,240,240)",
                borderRadius:".5vw",
                boxShadow:"0vw .4vw .5vw .1vw rgb(180,180,180)"
                }}>
            {info.map(item =>{
                nombres +=" "+item.results[0].product_name +","
                  price+= item.results[0].price *item.amount
                  amounts += item.amount
            })}
        <Grid justifyContent="center" container>
           
            <Grid item md={12}>
                <Grid container>
                <Grid item md={12}>
            <p style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.8vw"}} className="payment-p">
                Resumen de compra 
                <Icon style={{color:"rgb( 50, 180, 250 )",marginLeft:".4vw"}}>fact_check</Icon>
            </p>
                </Grid>
                <Grid item md={10}>
                <Divider />
                </Grid>
                <Grid item md={10}>
               <p  className="payment-p">
               Productos : {nombres}
               </p>
                </Grid>
                <Grid item md={10}>
                <Divider />
                </Grid>
                <Grid item md={10}>
            <p  style={{display:"flex",alignItems:"center"}} className="payment-p">
                Cantidad total : {amounts}
                <Icon style={{color:"rgb( 255, 20, 100 )",marginLeft:".2vw"}}>shop</Icon>
            </p>
                </Grid>
                <Grid item md={10}>
                <Divider />
                </Grid>
                <Grid item md={10}>
            <p style={{display:"flex",alignItems:"center"}} className="payment-p">
                Precio total : {price}
                <Icon style={{
                color:"rgb(255,170,50)",
                    marginLeft:".2vw",
  
                }}
                    >
                        paid
                    </Icon>
            </p>
            
                </Grid>
                <Grid item md={10}>
                <Divider />
                </Grid>
                <Grid item md={6}>
                <p className="payment-p">Datos de tu tarjeta:</p>
                </Grid>
                <Grid item md={3}>
                <p className="payment-p">Fecha de vencimiento</p>
                </Grid>
                <Grid item md={2}>
                <p className="payment-p">Codigo de tu tarjeta</p>
                </Grid>
                    <Grid item md={10}>
                      <form className="card" onSubmit={handleSubmit(price)} style={{margin:15}}>
                 <CardElement/>
                 <Button
               style={{display:"flex",justifyContent:"center",marginTop:"1.8vw"}}
               variant="contained"
               color="primary"
               size="small"
               type="submit"
               >
finalizar compra
            </Button>
                    </form>
                  
                    </Grid>
                    <Grid item md={10}>
                <Divider />
                </Grid>
                    <Grid item md={12}>
     
                </Grid>
                </Grid>
            </Grid>
        </Grid>
        </div>
            </Grid>
        </Grid>
      
        </>
    )
}
export default Formstripe;