import React from 'react' 
import { Grid,TextField,IconButton,Icon} from "@material-ui/core";
import {useState,useEffect}from'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios'

import InputRes from '../../../../components/response/inputRes'
import Response from '../../../../components/response/response'
import {CommentStyles} from '../../../../styles/comment' 
const PanelComment=({id,user,coments})=>{
    const [indice,setIndice]=useState()
    const coment = CommentStyles()
    const [loading,setLoading] = useState()
    const [res, setRes]=useState();
    const [comment,setCommment]=useState({
        user:user,
        id_product:id,
        comments:""
    })
    const handleChangeData = (prop) => (event) => {
        setCommment({ ...comment, 
          [prop]: event.target.value,
           id_product:id
        });
      };
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
  
return(
    
    <>
         {loading=== true && <div className="cargando"><CircularProgress color="primary" /><p>Publicando</p></div>}
      
        <Grid justifyContent="center" container>
<Grid item xs={12}>
<div  className={coment.cont_CommentsAdmin}>
  <p className={coment.title}>Comentarios</p>
  <Grid justifyContent="center" container>
{coments.map((item,index)=>{
    return(
        <>
        <Grid item xs={12}>  
        <div className={coment.cont}>
        <Grid justifyContent="center" container>
        <Grid item xs={12}>
        <p style={{width:"100%"}} className={coment.user}>{item.coment.user}</p>
        </Grid>
        <Grid item xs={12}>
        <p  className={coment.comment}>{item.coment.comment}</p>
        </Grid>
        <Grid item xs={12}>
          <div onClick={()=>setIndice(index)} style={{position:"relative",marginLeft:"1.5vw",marginTop:".5vw"}}>
          <Icon className={coment.iconReply} style={{fontSize:20,marginTop:"-.4vw",position:"absolute"}}>reply</Icon>
        <p style={{fontSize:10,color:"rgb(120,120,120)",marginTop:"-1.5vw",paddingBottom:"1vw",marginLeft:"1.5vw"}}>Responder</p>
        </div>
        </Grid>
        <Grid item xs={10}>
          {item.response.map((res,index)=>{
            return(
              <>
              <Response user={user} coments={res.comment}/>
              </>
            )
          })}
        </Grid>
        <Grid item xs={12}>
        {
          indice ===index&&
    <InputRes 
    user={user}
    id_coment={item.coment.id}
    />
        }
        </Grid>
     </Grid>
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
       <p>{id}</p>
        </>
   

)
}
export default PanelComment