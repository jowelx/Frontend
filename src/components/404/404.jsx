import React from 'react'
import { Grid,Icon } from "@material-ui/core";
import "./404.css"
const Page404 =()=>{
return(
    <>
    <div style={{
        zIndex:99,
        top:0,
        width:"100%",
        height:"100%",
        backgroundColor:"rgb(9,9,9)",
        position:'absolute',
        display:"flex"
,        justifyContent:"center",
        alignItems: "center"
        }}>
 <Grid justifyContent="center" container>
     <Grid item xs={7}>
     <img style={{width:"20%",marginBottom:"1vw",marginLeft:"-1vw"}} src="https://res.cloudinary.com/dfaaqkh9d/image/upload/v1636918972/logo/not_founde_jjbz4n.gif"/>
     
     </Grid>
     <Grid item xs={7}>
     <p style={{fontSize:"1.6vw"}} className="text_404" >No hemos podido encontrar lo que buscabas :(</p>

     </Grid>
     <Grid item xs={7}>
     <p className="text_404" >Revisa si tu conexion esta mal o</p>

     </Grid>
     <Grid item xs={7}>
<Grid container>
<Grid item xs={4}>
         <p className="text_404" >Puedes volver al inicio pulsando</p>
     
     </Grid>
     <Grid item xs={2}>
     <a href="/" style={{fontSize:".8vw"}} className="text_404_link" >Aquí</a>

     </Grid>
</Grid>
     </Grid>
     
 </Grid>
       
      
    </div>
    </>
)
}
export default Page404;