import { Box, Flex, HStack, Image, VStack,Text,Heading,Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <HStack border='solid red 1px' height='308px' justifyContent='center'>
     <VStack height='250px' width='359px' border='solid red 1px'>
     
     <HStack>
     <Text fontSize='32px' fontWeight='bold'>CONTACTO</Text>
     <Image src="./src/img/wsp.png" alt="whasap"></Image>
     </HStack>
     <VStack>
      <Text> Dirección: Jr. Manuel Villavicencio 472</Text>
      <Text> Chimbote,Peru</Text>
      <Text>Correo: info@plazasantander.com.pe</Text>
      <Button height='60px' width='320px' colorScheme='black' variant='outline'>COMO LLEGAR</Button>
    </VStack>
     </VStack>
     <VStack height='250px' width='359px' border='solid red 1px'>
     <Text fontSize='32px' fontWeight='bold'>HORARIO</Text>
     <Text></Text>
     </VStack>
     <VStack height='250px' width='359px' border='solid red 1px'>
     <Text fontSize='32px' fontWeight='bold'>SIGUENOS</Text>


     </VStack>

    </HStack>


  )
}

export default Footer