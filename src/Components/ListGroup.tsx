import { Alert, AlertIcon, Button, Heading, Input, ListItem, Stack, UnorderedList } from "@chakra-ui/react";

function ListGroup(){

  const items = ['Green', 'Red', 'Blue', 'Yellow', 'Balck'];

  let i = 10;
  i=15;

  function updateValue(){

    i=20;


  }

  updateValue()
  
  

return(

    <>
   

  
    
    <Button colorScheme='red' >Button</Button>
    <Alert status='success'>
    <AlertIcon />
    Data uploaded to the server. Fire on!
    </Alert>
   
    
    {/* <ul>
       {items.map(item => (<li key={item}>{item}</li>))} 
      
      <h1>{i}</h1> 
       
      
    </ul> */}

    <UnorderedList>

    {items.map(item => (<ListItem backgroundColor={"tomato"}>{item}</ListItem>))} 
      
      
    </UnorderedList>
    <h1>{i}</h1>
  </>
)

}

export default ListGroup;