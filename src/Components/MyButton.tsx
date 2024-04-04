import { Button } from '@chakra-ui/react'
import React from 'react'


interface Props{
     buttonName:string,
     onClick:()=>void


}

function MyButton({buttonName,onClick}:Props) {
  return (

    <>
    {/* <Button colorScheme='red' onClick={onClick}>{buttonName}</Button>  */}
    <button onClick={onClick}>{buttonName}</button>
    
    </>
  )
}

export default MyButton