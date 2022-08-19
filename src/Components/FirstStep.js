import React, { useContext } from 'react'
import { Button, TextField } from '@mui/material'
import { multiStepContext } from '../StepContext'

const FirstStep = () => {
    const{ setStep, userData, setUserData} = useContext(multiStepContext);
  return (
    <div>
        <div>
        <TextField 
            label="First Name"
            margin='normal'
            variant='outlined'
            className='inputField'
            value={userData["firstname"]}
            onChange={(e) => setUserData({...userData, "firstname": e.target.value})}
        />
        </div>
        <div>
        <TextField 
            label="Last Name"
            margin='normal'
            variant='outlined'
            className='inputField'
            value={userData["lastname"]}
            onChange={(e) => setUserData({...userData, "lastname": e.target.value})}
        />
        </div>
        <div>
        <TextField 
            label="Contact Number "
            margin='normal'
            variant='outlined'
            className='inputField'
            value={userData["contact"]}
            onChange={(e) => setUserData({...userData, "contact": e.target.value})}
        />
        </div>
        <div>
        <Button variant='contained' 
         onClick={() => setStep(2)}
         >Next</Button>
        </div>
    </div>
  )
}

export default FirstStep