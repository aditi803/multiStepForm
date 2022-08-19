import React, {useContext} from 'react'
import { Button, TextField } from '@mui/material'
import { multiStepContext } from '../StepContext'


const SecondStep = () => {
    const { setStep, userData, setUserData} = useContext(multiStepContext);
  return (
    <div>
         <div>
        <TextField 
            label="Email"
            margin='normal'
            variant='outlined'
            className='inputField'
            value={userData["email"]}
            onChange={(e) => setUserData({...userData, "email": e.target.value})}
        />
        </div>
        <div>
        <TextField 
            label="Country"
            margin='normal'
            variant='outlined'
            className='inputField'
            value={userData["country"]}
            onChange={(e) => setUserData({...userData, "country": e.target.value})}
        />
        </div>
        <div>
        <TextField 
            label="District "
            margin='normal'
            variant='outlined'
            className='inputField'
            value={userData["district"]}
            onChange={(e) => setUserData({...userData, "district": e.target.value})}
        />
        </div>
        <div>
        <Button variant='contained' 
        onClick={() =>setStep(1)} color="secondary">Back</Button> <span></span>
        <Button variant='contained' 
        onClick={() =>setStep(3)} >Next</Button>
        
        </div>
    </div>
  )
}

export default SecondStep