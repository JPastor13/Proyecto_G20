import { Box, Flex, HStack, Image, VStack,Text } from '@chakra-ui/react'



const Home = () => {
  return (
    <VStack  border="solid red 1px">
    <HStack border="solid red 1px" width="100%">
      <Image height="604px" width="100%" src="./src/img/portada.png"  bgRepeat="no-repeat" bgSize="cover"></Image>     
     </HStack>
     <VStack border="solid red 1px" width="100%" >
      <Box>
      <Text fontWeight="bold" fontSize="38px">AHORA MISMO EN LA PLAZA SATANDER</Text>
      </Box>
      <HStack height="700px" gap="250px">
      <Image height="500px" src="./src/img/evento1.jpg" ></Image>
      <Image height="500px" src="./src/img/servicio1.jpg" ></Image>
      </HStack> 
     </VStack>
     </VStack>
  )
}
export default Home