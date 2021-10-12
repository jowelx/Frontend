import React from 'react'
import { Grid,TextField,IconButton,Icon} from "@material-ui/core";
import {useState,useEffect}from'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios'
import {CommentStyles} from '../../styles/comment' 

const Response =({user,coments})=>{
    const coment = CommentStyles()
    return(
        <>
        <div className={coment.cont_response}>
        <Grid container>
<Grid item xs={12}>
        <p style={{width:"100%"}} className={coment.user}>{user}</p>
        </Grid>
        <Grid item xs={12}>
        <p  className={coment.comment}>{coments}</p>
        </Grid>
        <Grid item xs={12}>
          <div  style={{position:"relative",marginLeft:"1.5vw",marginTop:".5vw"}}>
          <Icon style={{fontSize:20,marginTop:"-.4vw",color:"rgb(120,120,120)",position:"absolute"}}>reply</Icon>
        <p style={{fontSize:10,color:"rgb(120,120,120)",marginTop:"-1.5vw",paddingBottom:"1vw",marginLeft:"1.5vw"}}>Responder</p>
        </div>
        </Grid>
     </Grid>
        </div>
        </>
    )
}
export default Response