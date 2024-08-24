<<<<<<< HEAD
import {
  Box,
  HStack,
  Image,
  VStack,
  Heading,
  Divider,
  AbsoluteCenter
} from "@chakra-ui/react";

const Eventos = () => {
  return (
    <VStack>
      <VStack width="100%">
      <Box
        position="relative"
        padding="5"
        bg="#FFFFFF"
        w="100%"
        mt={50}
        p={2}
        color="#BA1FB5"
      >
        <Divider border="solid 3px" />
        <AbsoluteCenter bg="#FFFFFF" px="400">
          <Heading as="h1" fontSize="40px" align="center">
            EVENTOS
          </Heading>
        </AbsoluteCenter>
      </Box>
        <HStack height="700px" gap="250px">
          <Image height="500px" src="./src/img/evento1.jpg"></Image>
          <Image height="500px" src="./src/img/servicio1.jpg"></Image>
        </HStack>
      </VStack>
      <VStack bg="#F9E9F8"></VStack>
    </VStack>
  );
};
export default Eventos;
=======
const Eventos=()=>{
    return ( 
        <div>como llegar</div>
    ) 
}
export default Eventos;
>>>>>>> d3120d87abea53906d7a59f24345ea5b82f500a0
