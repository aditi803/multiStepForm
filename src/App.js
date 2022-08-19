import FirstStep from './Components/FirstStep';
import SecondStep from './Components/SecondStep';
import ThirdStep from './Components/ThirdStep';
import {Stepper, StepLabel, Step} from '@mui/material'
import {multiStepContext} from './StepContext'
import React, {useContext} from 'react';
import DisplayData from './Components/DisplayData';

function App() {

  const {currentStep, finalData} = useContext(multiStepContext);
  const showStep = (step) =>{
    console.log(step);
      switch (step) {
        case 1:
          return <FirstStep />
        case 2:
          return <SecondStep />
        case 3:
          return <ThirdStep />
      }
  }
  return (
    <div className="App">
      <div className="App-header">
        <h1 style={{color:"blue", textAlign: "center" }}>
          SignUp Form
        </h1>
        <div className="center-stepper stepProgressBar">
          <Stepper style={{width:"25%"}}
              activeStep={currentStep - 1} 
              orientation="horizontal">
            <Step style={{padding:"1.5rem"}}>
              <StepLabel/>
            </Step>
            <Step style={{padding:"1.5rem"}}>
              <StepLabel/>
            </Step>
            <Step style={{padding:"1.5rem"}}>
              <StepLabel/>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
        <br/>
        {finalData.length > 0 ?  <DisplayData /> : "" }
      </div>
    </div>
  );
}

export default App;
