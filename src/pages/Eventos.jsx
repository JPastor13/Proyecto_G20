import {
  Box,
  HStack,
  Image,
  VStack,
  Heading,
  Divider,
  AbsoluteCenter,
  Fade, ScaleFade, Slide, SlideFade, Collapse,Button,fadeConfig,useDisclosure 
} from "@chakra-ui/react";

const Eventos = () => { 
  
  return (
    
      <VStack >
      <Box  width="100%" height="2000px" bgImage="./src/img/fondoevento.png">        
      <Image  height="400px" width="700px" margin="3em" marginBottom="200px"src="./src/img/image 1 (1).png" alt="evento 1"></Image>
      <Image  height="400px" width="700px" margin="3em" float="right" marginBottom="200px"src="./src/img/image 2 (1).png" alt="evento 2"></Image>
      <Image  height="400px" width="700px" margin="3em" src="./src/img/image 3 (1).png" alt="evento 3"></Image>
      </Box>
    </VStack>
  );


}
function ScaleFadeEx() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
          Fade
        </Box>
      </ScaleFade>
    </>
  )
}
export default Eventos

