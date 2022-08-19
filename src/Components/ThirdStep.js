import React, {useContext} from 'react'
import { Button, TextField } from '@mui/material'
import { multiStepContext } from '../StepContext'

const ThirdStep = () => {
  const { setStep, userData, setUserData, submitData} = useContext(multiStepContext);
  return (
    <div>
         <div>
        <TextField 
            label="City"
            margin='normal'
            variant='outlined'
            className='inputField'
            value={userData["city"]}
            onChange={(e) => setUserData({...userData, "city": e.target.value})}
        />
        </div>
        <div>
        <TextField 
            label="Landmark"
            margin='normal'
            variant='outlined'
            className='inputField'
            value={userData["landmark"]}
            onChange={(e) => setUserData({...userData, "landmark": e.target.value})}
        />
        </div>
        <div>
        <TextField 
            label="Postal Code"
            margin='normal'
            variant='outlined'
            className='inputField'
            value={userData["postcode"]}
            onChange={(e) => setUserData({...userData, "postcode": e.target.value})}
        />
        </div>
        <div>
        <Button variant='contained' 
         onClick={() => setStep(2)}
         color="secondary"
         >Back</Button> <span> </span>
          <Button variant='contained' 
         onClick={submitData} 
         >Submit</Button>
        </div>
    </div>
  )
}

export default ThirdStep