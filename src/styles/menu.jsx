import { makeStyles } from "@material-ui/core/styles";
export const menu = makeStyles({
    marginBottom:{
        marginBottom:"10%"   
    },
    logo:{
        
        position:"relative",
        top:"5%",
        marginLeft:"20%",
        marginTop:"10%",
        marginBottom:"10%",
        width:"50%",
    },
    bar:{
        background: "linear-gradient(rgb(40, 40, 45),rgb(30, 30, 35));",
        marginBottom:"2%" 
    },
    cont:{
        backgroundColor:"rgb(40,40,40)",
        height:"100%",
        background: "linear-gradient(rgb(25, 25, 32),rgb(10, 10, 12));"
    },
    active0:{
        WebkitBackgroundClip:"Text",
        WebkitTextFillColor:"transparent",
        background: "linear-gradient(rgb(250, 100, 120),rgb(160,40, 60));",
      
    },
    active1:{
        WebkitBackgroundClip:"Text",
        WebkitTextFillColor:"transparent",
        background: "linear-gradient(rgb(250, 245, 110),rgb(160,130, 20));",

    }, 
     active2:{
        WebkitBackgroundClip:"Text",
        WebkitTextFillColor:"transparent",
        background: "linear-gradient(rgb(0, 255, 100),rgb(0,140, 20));",

    },  
    active3:{
        WebkitBackgroundClip:"Text",
        WebkitTextFillColor:"transparent",
        background: "linear-gradient(rgb(25, 240, 180),rgb(10, 150, 100));",
        

    }, 
     active4:{
       WebkitBackgroundClip:"Text",
       WebkitTextFillColor:"transparent",
       background: "linear-gradient(rgb(255, 195, 40),rgb(170,100, 20));",
       

    }, 
     active5:{
        WebkitBackgroundClip:"Text",
        WebkitTextFillColor:"transparent",
        background: "linear-gradient(rgb(2, 200, 250),rgb(10,140, 210));",

    },item:{
        color:"rgb(250,250,250)",
    },
    cont_item:{
        background: "linear-gradient( rgb(50, 50, 52),rgb(45, 45, 48));"
    },item_div:{
        backgroundColor:"rgb(35,35,35)",
    },Cont_active:{
        
        background: "linear-gradient(rgb(70, 70, 75),rgb(55, 55, 58));"
        
    }
  });