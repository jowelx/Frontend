import { makeStyles } from "@material-ui/core/styles";
export const CommentStyles = makeStyles({
    iconReply:{
        color:"rgb(255,50,120)",
    },
    cont:{
        backgroundColor:"rgb(255,255,255)",
        borderRadius:".4vw",
        marginBottom:".8vw",
        boxShadow:"0 .2vw .1vw 0vw rgb(210,210,210)",
        border:"solid .1vw",
        borderColor:"rgb(200,200,200)",
    },
    contRes:{
        backgroundColor:"rgb(255,255,255)", 
        borderRadius:"0vw",
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
        color:"rgb(0,0,0)",
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
        marginTop:"1vw",
    marginBottom:"5vw",
    backgroundColor:"rgb(255,255,255)",
    borderRadius:".5vw ",
    border:"solid .1vw",
    borderColor:"rgb(150,150,150)",
    

    },
    cont_CommentsAdmin:{
       
      
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