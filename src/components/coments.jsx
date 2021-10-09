import React from 'react'
import { Grid,TextField,IconButton,Icon} from "@material-ui/core";
import {useState,useEffect}from'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios'
import {CommentStyles} from '../styles/comment' 
const Comments =({id,user})=>{
    const coment = CommentStyles()
    const [loading,setLoading] = useState()
    const [res, setRes]=useState();
    const [data,setData]=useState([])
    const [comment,setCommment]=useState({
        user:user,
        id_product:id,
        comments:""
    })
    const handleChangeData = (prop) => (event) => {
        setCommment({ ...comment, [prop]: event.target.value });
      };
      const fetchApi = async() =>{
        let url =`http://localhost:5000/comments/${id}`
        const response = await fetch(url);
        const responseJSON = await response.json();
        setData(responseJSON)
         console.log(responseJSON)
        }
      const enviar=()=>{
        setLoading(true)
          let url ="http://localhost:5000/comments"
          axios.post(
            url,
            {
            "data":comment,
           
          } 
          )
         .then(response => { 
       console.log(response)
       setRes(response.data)
       if(response.data === "ok"){
        setLoading(false)
        }
    
       }
        )
         
      }
      useEffect(()=>{
        fetchApi()
      },[res])
    return(
        <>
         {loading=== true && <div className="cargando"><CircularProgress color="primary" /><p>Publicando</p></div>}
      
        <Grid justifyContent="center" container>
<Grid item xs={8}>
<div className={coment.cont_Comments}>
  <p className={coment.title}>Comentarios</p>
  <Grid justifyContent="center" container>
{data.map(item=>{
    return(
        <>
        <Grid item xs={10}>
        <div className={coment.cont}>
        <p className={coment.user}>{item.user}</p>
        <p className={coment.comment}>{item.comment}</p>
        </div>
        </Grid>
        </>
    )
    })}
<Grid item xs={9}>
<TextField value={comment.comments} onChange={handleChangeData('comments')} style={{
  marginTop:"2vw",
  backgroundColor:"rgb(240,240,240)",
  marginBottom:"5vw",
  width:"100%",
  
  borderRadius:".2vw"
  
  }}type="text" label="Agregar comentario"/>    
</Grid>

<Grid item xs={1}>
<IconButton className="cont_icon" style={{marginLeft:"2vw",marginTop:"2vw"}} onClick={()=>enviar()} aria-label="add to shopping cart">
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
export default Comments;