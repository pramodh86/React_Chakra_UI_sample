import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import MyButton from './MyButton'
import MyAlert from './MyAlert'

function MyMain() {



const [clickStatus,setClickStatus] = useState(false);

  return (
    <>
    {clickStatus && <MyAlert/> }
    
    <MyButton buttonName="click" onClick={()=>setClickStatus(true)} />
    
    </>
  )
}

export default MyMain