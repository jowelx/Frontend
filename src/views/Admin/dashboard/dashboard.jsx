//vista donde se controlan las vistas del administrador
import React from 'react';
import Menu from '../../../components/menu'
import { useState,useEffect} from 'react';
import { Grid} from "@material-ui/core";
import Published from '../published/published'
import Publish from '../publish/publish'
import News from '../news/news'
import Sumary from '../summary/sumary'
import CommentsAdmin from '../comments/comments'
import {useUser}from '../../../context/dataProvider'
const Dashboard =(props)=>{
    const {ADMcomments,url} = useUser()
        const[id,setId]=useState()
    const [coment,setComent]=useState()
    const fetchApi = async() =>{
        const response = await fetch(url+"countComents");
        const responseJSON = await response.json();
        setComent(responseJSON);
          console.log(responseJSON)
        }


        const [view,setView]=useState(0)
        useEffect(()=>{
            fetchApi()
            setView(parseInt(props.match.params.view))
          },[id,ADMcomments])
    return(
        <div>
         
            <Grid container>
                <Grid item md={12}>
            <Menu Views={view} View={setView}comments={coment}/>
            </Grid>
            
            <p>{props.match.params.view}</p>
            <Grid item md={12}>
            {view ===0 && <Sumary/>}
            {view ===1 && <Publish View={setView}/>}
            {view ===2 && <Published />}
            {view ===3 && <CommentsAdmin setid={setId}/>}
            {view ===6 && <News />}
            </Grid>
            </Grid>
        </div>
    )
}
export default Dashboard;