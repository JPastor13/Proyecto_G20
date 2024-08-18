import { Box, Flex, HStack, Image, VStack,Text,StackDivider,SimpleGrid,Stack, CardBody,Heading,Divider,ButtonGroup,Button,CardFooter,Card,AbsoluteCenter,Link,Grid, GridItem  } from '@chakra-ui/react'
const delys = () =>{
    return(
        <VStack bg="#edf0f0"> 
        <Box
    position="relative"
    padding="10"
    bg="#edf0f0"
    w="100%"
    mt={100}
    p={5}
    color="#080808"
  >
    <Divider border="solid 3px"/>
    <AbsoluteCenter bg="#edf0f0" px="400">
    <Heading as="h1" fontSize="35px" align="center"> BIENVENIDO  </Heading>    
    </AbsoluteCenter>
  </Box>
  <Box color="#7d7d7d">
    <Text fontSize="20px" align="center">
    Dely's: Sopas y Chicharrones
    </Text>
  </Box>
  <HStack  width='auto'>
  <Box
    position="relative"
    padding="10"
    bg="#edf0f0"
    w="100%"
    height='1200px'
  >
    <Grid
templateAreas={`
              "nav main"
              "nav footer""header header"`}
gridTemplateRows={'200px 1fr 50px'}
gridTemplateColumns={'700px 2fr'}
h='400px'
gap='1'
color='blackAlpha.700'
fontWeight='bold'
>

<GridItem pl='3' bg='white' height='500px'area={'nav'}>

 <Box>
 <Image src="./src/img/delys fondos.jpg" height='500px' width='700px' alt="logo" align='center'></Image>
 </Box>

</GridItem>
<GridItem pl='3' bg='white' width='250px'area={'main'}>
<Box >
   Dely's
 <Image src="./src/img/WhatsApp Image 2024-04-18 at 12.51.14 (1) 1.png" height='150px' width='90px' alt="eee" position='relative' display='block' margin='auto' align='right'></Image>
 </Box>
</GridItem>

<GridItem pl='3' bg='white' width='250px' area={'footer'}>
<Box >
<Box height='50px'></Box>

 <HStack>
  <Image src="./src/img/wsp.png"></Image>
  <Text color="black"> 935 345 333</Text>
  </HStack>
  <HStack>
  <Image src="./src/img/reloj.png" alt="icono" width='50px'></Image>
  <Text color="black" align='center'>De lunes a domingo de 10:00 am - 10:00 pm</Text>
  </HStack>
  <HStack>
  <Image src="./src/img/mapa.png"></Image>
  <Text color="black">1er Piso</Text>
  </HStack>

</Box>
</GridItem>

<GridItem pl='3' bg='white' height='450px'area={'header'}>
<Box >
<HStack spacing='220px'>
    <Box w='500px' h='200px' bg='white' >
        <Box height='50px'></Box>
        <Text color="black">Ven y disfruta de los más ricos chicharrones </Text>
        <Text color="black">  y sánguches tradicionales de Chimbote.</Text>
        
    </Box>
    <Box w='200px' h='150px' bg='#f6d4fc'>
    <Image src="./src/img/Star.png" alt="estrella" position='relative' display='block' margin='auto' align='right'></Image>
    <Button height='30px' width='200px' colorScheme='black' variant='outline'>DÉJANOS TU OPINIÓN</Button>
    </Box>
  </HStack>
  <HStack justifyContent='center' gap="5rem" >
    <Image  width='200px' height='200px'src="./src/img/delys 1.jpg" alt="platos" ></Image>
    <Image width='200px' height='200px'src="./src/img/delys 2.jpg" alt="platos" ></Image>
    <Image width='200px' height='200px' src="./src/img/delys 3.jpg" alt="platos" ></Image>

  </HStack>
</Box>

</GridItem>

</Grid>


  </Box>
  
 </HStack>

  
    </VStack>
    )
    
}

export default delys;