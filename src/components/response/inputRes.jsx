import React from 'react'
import { Grid,TextField,IconButton,Icon} from "@material-ui/core";
import {useState,useEffect}from'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios'
import {CommentStyles} from '../../styles/comment' 
import clsx from 'clsx'
import {useUser}from '../../context/dataProvider'
const InputRes =({user,id_coment,setRes,setLoading, setindice, setindiceres})=>{
  const {url}= useUser()
  const [indice,setIndice]=useState()
    const coment = CommentStyles()
  
    const [data,setData]=useState([])
    const [comment,setCommment]=useState({
        user:user,
        id_comment:id_coment,
        comment:""
    })
    const handleChangeData = (prop) => (event) => {
        setCommment({ ...comment, [prop]: event.target.value });
      };
 
      const enviar=()=>{
        setLoading(true)
          let urle =url+"answers"
          axios.post(
            urle,
            {
            "data":comment,
           
          } 
          )
         .then(response => { 
       console.log(response)
       setRes(response.data)
   
       if(response.data === "ok"){
        setLoading(false)
        setCommment({ ...comment, comment: "" });
        setindice("")
        setindiceres("")
        }
    
       }
        )
         
      }

    return(
        <>
   
        <Grid justifyContent="center" container>
<Grid item xs={11}>
<div className={coment.cont_res}>

  <Grid justifyContent="center" container>

<Grid item xs={10}>
<TextField value={comment.comment} onChange={handleChangeData('comment')} 
className={coment.input}
type="text" label="Responder comentario"/>    
</Grid>

<Grid item xs={1}>
<IconButton className="cont_icon"onClick={()=>enviar()} style={{marginLeft:"2vw",marginTop:"2vw"}} onClick={()=>enviar()} aria-label="add to shopping cart">
                    <Icon color="primary">send</Icon>
                  </IconButton>
</Grid>
    </Grid>
    </div>
</Grid>
        </Grid>
       
        </>
    )
}
export default InputRes;