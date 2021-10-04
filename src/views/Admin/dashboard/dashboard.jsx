//vista donde se controlan las vistas del administrador
import React from 'react';
import Menu from '../../../components/menu'
import { useState} from 'react';
import { Grid} from "@material-ui/core";
import Published from '../published/published'
import Publish from '../publish/publish'

const Dashboard =()=>{
const [view,setView]=useState(0)
    return(
        <div>
            <Grid container>
                <Grid item md={12}>
            <Menu Views={view} View={setView}/>
            </Grid>
            <Grid item md={12}>
            {view ===1 && <Publish View={setView}/>}
            {view ===2 && <Published/>}
            </Grid>
            </Grid>
        </div>
    )
}
export default Dashboard;