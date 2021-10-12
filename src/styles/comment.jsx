import { makeStyles } from "@material-ui/core/styles";
export const CommentStyles = makeStyles({
    cont:{
        backgroundColor:"rgb(240,240,255)",
        borderRadius:".8vw",
        marginBottom:".8vw",

        
    },
    contRes:{
        backgroundColor:"rgb(240,240,255)",
      
        borderRadius:"2vw",
        marginBottom:".8vw"
     
    },
    user:{
        fontSize:10,
        color:"rgb(100,100,120)",
        marginLeft:"2vw",
        paddingTop:".5vw",
        marginBottom:"-.8vw"
    },
    comment:{
        marginLeft:"2vw",
        color:"rgb(20,20,20)",
        paddingBottom:"1vw",
        width:"92%",
        height:"auto",
        textAlign:"justify"
    },
    input:{
        marginTop:"1vw",
        backgroundColor:"rgb(240,240,240)",
        marginBottom:"1vw",
        width:"100%",
        marginLeft:"1.5vw",
        borderRadius:".2vw",
    
    },
    enable:{
 
        display:"block",
   
        backgroundColor:"rgb(240,240,240)",
       
    },
    disable:{
display:"none",

    },

    cont_Comments:{
    marginBottom:"5vw",
    backgroundColor:"rgb(245,245,255)",
    borderRadius:".5vw ",
    boxShadow:"0 .2vw .2vw 0 rgb(120,120,120)",

    },
    cont_CommentsAdmin:{
        borderRight:"solid .1vw",
        boderColor:"rgb(255,20,20)"
    },
    cont_res:{
      marginBottom:"1vw",
      backgroundColor:"rgb(245,245,255)",
      borderRadius:".5vw ",
 
      },
      cont_response:{
        width:"100%",
        borderRadius:".5vw ",
        marginBottom:"2vw",
        backgroundColor:"rgb(240,240,240)",
        border : "solid .1vw",
        borderColor:"rgb(200,200,200)"
           },
    title:{
        paddingTop:"2vw",
        marginLeft:"5.5vw"
    }


})