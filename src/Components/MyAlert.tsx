import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

function MyAlert() {
  return (
    <Alert status='success'>
    <AlertIcon />
   This is alert from Chakra UI
   <button>close</button>
  </Alert>
  )
}

export default MyAlert