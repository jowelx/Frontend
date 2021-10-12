//estrilos de barra de navegacion
import { makeStyles } from "@material-ui/core/styles";
export const navbar = makeStyles({

  logo:{
      position:"relative",
      top:"5%",
      margin:"2%",
      width:"30%",
  },input:{
    marginTop:"1.45%",
      width:"100%",
     border:0,
     outline:" none",
      height:"60%"
  },cont_Nav:{
      backgroundColor:"rgb(20,20,30)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
     
  },search_icon:{
      color:"rgb(20,20,30)",
      fontSize:"160%",
      marginTop:"7%",
      backgroundColor:"rgb(255,200,80)",
      width:"50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height:"65%",
      cursor:"pointer",
      borderRadius:"0 .2vw .2vw 0vw"
    },
    iconsWhite:{
      WebkitBackgroundClip:"Text",
      WebkitTextFillColor:"transparent",
      background: "linear-gradient(360deg, rgba(80,80,80,1) 0%, rgba(255,255,255,1) 35%, rgba(230,230,230,1) 100%);",
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
      cursor:"pointer"
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