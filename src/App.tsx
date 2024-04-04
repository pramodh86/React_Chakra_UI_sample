
import { Button, ChakraProvider } from '@chakra-ui/react';
import ListGroup from './Components/ListGroup';
import MyMain from './Components/MyMain';

function App() {


  return (
  <ChakraProvider>
   {/* <ListGroup/>  */}
  <MyMain/>
  </ChakraProvider>
    
  )
}

export default App
