//estilo de las terjetas de los productos
import { makeStyles } from "@material-ui/core/styles";
export const homeStyles = makeStyles({


    items:{
        
        
        width: "100%",
        height: "18vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      
        borderBottom:"solid .1vw",
       
    },
    itemsImg:{
        maxHeight:"14vw",
        maxWidth:"100%",
        width:"auto",
        height:"auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
    },
    tittle_product:{
        fontFamily: "'Zen Kurenaido', sans-serif",
        textAlign:"left",
        marginLeft:"8%",
        position:"relative",
        bottom:0,
    },
    cont_description_product:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});