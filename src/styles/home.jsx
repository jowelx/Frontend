//estilo de las terjetas de los productos
import { makeStyles } from "@material-ui/core/styles";
export const homeStyles = makeStyles({

    slider:{  
        position:" relative",
        width: "100%",
        height:"100%",
        marginBottom:"20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    items:{
        marginTop:"2%",
        
        width: "100%",
        height: "18vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow:"hidden",
        borderBottom:"solid .1vw"
    },
    itemsImg:{
        maxHeight:"14vw",
        maxWidth:"14vw",
        width:"auto",
        height:"auto",
        boxSizing:"content-box",
        display:"block",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    tittle_product:{
       
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