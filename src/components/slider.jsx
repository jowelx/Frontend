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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



const Slider=()=> {
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
  const url ='http://localhost:5000/news';   
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
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
    
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {items.map((step, index) => (
          <div style={{justifyContent:"center"}} key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
               
                  display: 'block',
                  maxWidth: "100%",
                  overflow: 'hidden',
                  width: 'auto',
                  height: "auto",
                  maxHeight: "60vw",
                }}
                src={step.url}
               
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        style={{backgroundColor:"rgb(255,20,20,0)"}}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
      
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            
        
          </Button>
        }
      />
    </Box>
  );
}

export default Slider;