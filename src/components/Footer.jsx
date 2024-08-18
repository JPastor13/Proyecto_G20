import { Box, Flex, HStack, Image, VStack,Text,Heading,Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <HStack height='308px' justifyContent='center' gap="10rem">
     <VStack height='250px' width='359px'  bg="linear-gradient(0deg, rgba(235,235,235,1) 45%, rgba(215,207,207,1) 81%)">
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
     <VStack height='250px' width='359px' bg="linear-gradient(0deg, rgba(235,235,235,1) 45%, rgba(215,207,207,1) 81%)">
     <Text fontSize='32px' fontWeight='bold' marginTop="5px" >HORARIO</Text>
      <Text marginTop="7px">Lunes a Domingo</Text>
      <Text>10:00 am - 10:00 pm</Text>
     </VStack>
      
     <VStack height='250px' width='400px' justifyContent="space-between" bg="linear-gradient(0deg, rgba(235,235,235,1) 45%, rgba(215,207,207,1) 81%)">
     <Text fontSize='32px' fontWeight='bold' marginTop="5px" >SIGUENOS</Text>
     <HStack width="240px">
      <Image src='./src/img/f-removebg-preview 1.png'></Image>
      <Image src='./src/img/i-removebg-preview 1.png'></Image>
      <Image src='./src/img/t-removebg-preview 1.png'></Image>
      <Image src='./src/img/y-removebg-preview 1.png'></Image>
     
     </HStack>
     <HStack>

     </HStack>
     </VStack>

    </HStack>


  )
}

export default Footer