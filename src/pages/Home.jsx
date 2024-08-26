import {
  Box,
  Flex,
  HStack,
  Image,
  VStack,
  Text,
  StackDivider,
  SimpleGrid,
  Stack,
  CardBody,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  CardFooter,
  Card,
  AbsoluteCenter,
  Link,
  List,
} from "@chakra-ui/react";
import "./Home.css";
import Carousel from "../components/carousel";
import Carousel2 from "../components/Carousel2";


const Home = () => {
  
  return (
   
  <>
    <VStack>

      <HStack width="100%" >
      <Carousel/>
      </HStack>
      <VStack width="100%">
        <Box>
          <Text fontWeight="bold" fontSize="38px">
            AHORA MISMO EN LA PLAZA SANTANDER
          </Text>
        </Box>
        <HStack height="700px" gap="250px">
          <Image height="500px" src="./src/img/evento1.jpg"></Image>
          <Image height="500px" src="./src/img/servicio1.jpg"></Image>
        </HStack>
      </VStack>
      <VStack bg="#F9E9F8">
        <Box
          position="relative"
          padding="10"
          bg="#F9E9F8"
          w="1500px"
          mt={100}
          p={5}
          color="#BA1FB5"
        >
          <Divider border="solid 3px" />
          <AbsoluteCenter bg="#F9E9F8" px="400">
            <Heading as="h1" fontSize="40px" align="center">
              {" "}
              NUESTRAS TIENDAS
            </Heading>
            <Text
              width="100%"
              fontSize="20px"
              align="center"
              whiteSpace="nowrap"
              overflow="hidden"
            >
              HAY PARA TODOS LOS GUSTOS
            </Text>
          </AbsoluteCenter>
        </Box>

        <Box bg="#F9E9F8" w="100%" color="white" mt={10}>
          <VStack>
            <Stack direction={["column", "row"]} spacing="24px">
              <Box w="250px" h="250px" bg="yellow.200">
                <Card maxW="sm" align="center">
                  <CardBody align="center">
                    <Image
                      src="./src/img/logo_mrpapas.jpg"
                      alt="MR. PAPA"
                      borderRadius="lg"
                      w="100%"
                    />
                    <Stack mt="1">
                      <Heading size="md">
                        <Link href="/tiendadetalles">MR. PAPA</Link>
                      </Heading>
                    </Stack>
                  </CardBody>
                </Card>
              </Box>
              <Box w="250px" h="250px" bg="yellow.200">
                <Card maxW="sm" align="center">
                  <CardBody align="center">
                    <Image
                      src="./src/img/logo_raffos.jpg"
                      alt="RAFFO'S"
                      borderRadius="lg"
                      w="100%"
                    />
                    <Stack mt="1">
                      <Heading size="md">
                        <Link href="/Raffos">RAFFO'S</Link>
                      </Heading>
                    </Stack>
                  </CardBody>
                </Card>
              </Box>
              <Box w="250px" h="250px" bg="yellow.200">
                <Card maxW="sm" align="center">
                  <CardBody align="center">
                    <Image
                      src="./src/img/logo_rinconfrances.jpeg"
                      alt="RINCÓN FRANCÉS"
                      borderRadius="lg"
                      w="100%"
                    />
                    <Stack mt="1">
                      <Heading size="md">
                        <Link href="/Rincon">RINCÓN FRANCÉS</Link>
                      </Heading>
                    </Stack>
                  </CardBody>
                </Card>
              </Box>
              <Box w="250px" h="250px" bg="yellow.200">
                <Card maxW="sm" align="center">
                  <CardBody align="center">
                    <Image
                      src="./src/img/logo_donfrancisco.png"
                      alt="DON FRANCISCO"
                      borderRadius="lg"
                      w="100%"
                    />
                    <Stack mt="1">
                      <Heading size="md">
                        <Link href="/Donfra">DON FRANCISCO</Link>
                      </Heading>
                    </Stack>
                  </CardBody>
                </Card>
              </Box>
            </Stack>

            <Stack direction={["column", "row"]} spacing="24px">
              <Box w="250px" h="250px" bg="yellow.200">
                <Card maxW="sm" align="center">
                  <CardBody align="center">
                    <Image
                      src="./src/img/WhatsApp Image 2024-04-18 at 12.51.14 (1) 1.png"
                      alt="DELY'S"
                      borderRadius="lg"
                      w="100%"
                    />
                    <Stack mt="1">
                      <Heading size="md">
                        <Link href="/Delys">DELY’S</Link>
                      </Heading>
                    </Stack>
                  </CardBody>
                </Card>
              </Box>
              <Box w="250px" h="250px" bg="yellow.200">
                <Card maxW="sm" align="center">
                  <CardBody align="center">
                    <Image
                      src="./src/img/uan 3.16 1.png"
                      alt="Juan"
                      borderRadius="lg"
                      w="100%"
                    />
                    <Stack mt="1">
                      <Heading size="md">
                        <Link href="/Juan316">JUAN 3.16 CAFÉ</Link>
                      </Heading>
                    </Stack>
                  </CardBody>
                </Card>
              </Box>
              <Box w="250px" h="250px" bg="yellow.200">
                <Card maxW="sm" align="center">
                  <CardBody align="center">
                    <Image
                      src="./src/img/logo 2.png"
                      alt="Sushi"
                      borderRadius="lg"
                      w="100%"
                    />
                    <Stack mt="1">
                      <Heading size="md">
                        <Link href="/sushi">SUSHI TOP</Link>
                      </Heading>
                    </Stack>
                  </CardBody>
                </Card>
              </Box>
              <Box w="250px" h="250px" bg="yellow.200">
                <Card maxW="sm" align="center">
                  <CardBody align="center">
                    <Image
                      src="./src/img/logo 3.png"
                      alt="MR. PAPA"
                      borderRadius="lg"
                      w="100%"
                    />
                    <Stack mt="1">
                      <Heading size="md">
                        <Link href="/Econo">ECONOVISION</Link>
                      </Heading>
                    </Stack>
                  </CardBody>
                </Card>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </VStack>
    </VStack>
    </>
  );
};

export default Home;
