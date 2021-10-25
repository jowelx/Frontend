//estrilos de barra de navegacion
import { makeStyles } from "@material-ui/core/styles";
export const navbar = makeStyles({

  logo:{
      position:"relative",
      top:"5%",
      margin:"2%",
      width:"30%",
      ['@media  (min-width:300px)and (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        width: '80%',
        marginTop:"5vw"
      },
  },cont:{
     
     width:"100%",
 
     
     ['@media  (min-width:300px)and (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
      width:"95%",
      fontSize:"1.4vw",
    },
  
  } , disabled:{
    ['@media  (min-width:300px)and (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
      display:"none"
    }, 

  },enable:{
display :"none",
    ['@media  (min-width:300px)and (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
      display:"block"
    }, 
  },cont_Nav:{
      backgroundColor:"rgb(20,20,30)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
     
  },search_icon:{
      color:"rgb(100,100,100)",
      fontSize:"1.4vw",
      padding:".5vw 0vw",
      backgroundColor:"rgb(255,255,255)",
      width:"40%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor:"pointer",
      borderLeft:"solid .1vw rgb(200,200,200)",
      borderRadius:"0 .1vw .1vw 0vw",
      ['@media  (min-width:300px)and (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        fontSize:"4vw",
      },
    },
    iconsWhite:{
  
      color:"rgb(250,250,250)",
       marginTop:"20%",
      fontSize:25
    },
    iconsDark:{
      color:"rgb(255,200,70)",
      marginTop:"35%"
    },
    number:{
      textAlign:"center",
      fontSize:"70%",
      position:"absolute",
      marginTop:"0.1%",
      marginLeft:"1%",
      padding:".1% .4%",
      backgroundColor:"rgb(255,25,25)",
      borderRadius:"10vw",
      color:"white"
    },button:{
      color:"rgb(255,200,70)",
      fontSize:"75%",
      
    },contButon:{
     
      display:"flex",
      justifyContent:"center",
      alignItems: "center",
      width:"100%",
      padding:"5% 10%",
      borderRadius:"5%",
      marginTop:"5%",
      marginLeft:"40%",
      marginBottom: "8%",
      cursor:"pointer",
      ['@media  (min-width:300px)and (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        display:"none"
      },
    } ,
    true:{
      backgroundColor: "rgb(2,255,20)"

    },
    false:{
      backgroundColor: "rgb(255,55,20)"

    },
    normal:{
      backgroundColor: "rgb(25,255,250,.5)"
    }
});