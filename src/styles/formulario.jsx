import { makeStyles } from "@material-ui/core/styles";

export const login = makeStyles({
  cont_form:{
    marginTop:"50%",
    width:"100%",
    textAlign:"center",
    backgroundColor:"rgb(255,255,255)",
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    padding:"20% 12%",
    boxShadow:"0 .2vw .3vw .1vw rgb(150,150,150)",
    borderRadius:".5vw"
  },
    form:{
      marginTop:"30%",
      marginBottom:"10%",
      width:"100%",
      borderRadius:".2vw .2vw 0vw 0",
  
    },
    false:{
      backgroundColor: "rgb(255,100,100,.5)"

    },
    button:{
      marginTop:"15%",
      marginBottom:"5%",
    }
});
export const register = makeStyles({
  cont_form:{
    marginTop:"5%",
    width:"20%",
    textAlign:"center",
    background: "linear-gradient(rgb(255, 255, 255),rgb(23.30, 230, 230));",
    
    marginLeft: "40%",
    padding:"6% 2%",
    boxShadow:"0 .2vw .3vw .1vw rgb(150,150,150)",
    borderRadius:".5vw"
  },
    form:{
      width:"100%",
      borderRadius:".2vw .2vw 0vw 0",
    },
    false:{
      backgroundColor: "rgb(255,100,100,.5)"
    },
    button:{
      marginTop:"20%",
    }
});