import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useEffect,useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Product from '../../../components/product'
import { Grid} from "@material-ui/core";
import {useUser} from '../../../context/dataProvider'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



const Modify=()=> {
  const {url}= useUser();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  //
// STEPPER //
 //
   
    const [items,setItems]=useState([]);
    const fetchApi = async() =>{
    const response = await fetch(url);
    const responseJSON = await response.json();
      setItems(responseJSON);
      console.log(responseJSON)
    }
    const maxSteps = items.length;
    useEffect(()=>{
      fetchApi()
    },[])
  return (
    <Grid container>
 <>
 {items.map(e=>{

   return(
<>
{   e.product_name.toLowerCase().includes("cau") &&
<Grid item xs={3}>
<Product  
                            id={e.id}
                            tittle={e.product_name} 
                            img={e.portada} 
                            description={e.description_product}
                            price={e.price}
                             />   
</Grid>

}                    
</>
   )
   
 })}
 </>
    </Grid>


  );
}

export default Modify;