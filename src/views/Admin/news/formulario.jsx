import React from 'react'
import { Button, Grid, ButtonGroup,TextField,InputLabel,MenuItem,IconButton,Icon } from "@material-ui/core";
import ImageUploading from "react-images-uploading";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import '../publish/styles.css'
import { useState } from "react";

const Form =()=>{
 
    const [loading,setLoading] = useState()
    const [images, setImages] = useState([]);
    const enviar=()=>{
          let url ="http://localhost:5000/news"
          axios.post(
            url,
            {"file":images
         
          } 
          )
         .then(response => { 
  
       if(response.data === "ok"){
       setLoading(false)
       }
        })
         
      }
      const handleClick=() =>{
        setLoading(true);
        enviar()
      }
    const onChange = (imageList, addUpdateIndex) => {
     
        setImages(imageList);
       };
    return(
        <>
        <div style={{marginTop:"5vw"}}>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={10}
        dataURLKey="url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div >
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            <Grid justifyContent="center" container>
            {imageList.map((image, index) => (
                <Grid item xs={3}>
              <div key={index} style={{
                    alignContent:"center",
                    width:"100%",
                    justifyContent:"center"}}>
                <img src={image['url']}style={{
                    maxHeight:"10vw",
                    maxWidth:"20vw",
                    width:"auto",
                    height:"auto",
                    justifyContent:"center"

                }} alt="" width="100" />
                <div style={{position:"absolute",justifyContent:"center"}}>
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
              </Grid>
            ))}
             </Grid>
          </div>
        )}
       
      </ImageUploading>
      <LoadingButton
        onClick={handleClick}
        endIcon={<SendIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
        disabled={images.length > 0 ?false:true}
      >
        Send
      </LoadingButton>
      </div>
        </>
    )
}
export default Form