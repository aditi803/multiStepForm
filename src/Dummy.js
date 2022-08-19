import React from 'react'
import {Stepper, StepLabel, Step} from '@mui/material'

const Dummy = () => {
  return (
    <div>
        <Stepper style={{width:"15%"}}
              activeStep="1" 
              orientation="horizontal">
            <Step >
              <StepLabel/>
            </Step>
            <Step >
              <StepLabel/>
            </Step>
            <Step >
              <StepLabel/>
            </Step>
          </Stepper>
    </div>
  )
}

export default Dummy