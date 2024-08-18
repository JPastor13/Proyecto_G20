import React, { useEffect, useState } from "react";

import { getallStores } from "../service/api";
import { useParams } from "react-router-dom";


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
  Grid,
  GridItem,
} from "@chakra-ui/react";

const initialValue = {
  Stand: "",
  name: "",
  logo: "",
  phone: "",
  days_open: "",
  schedule: "",
  level: "",
  title: "",
  description: "",
  photo_menu_1: "",
  photo_menu_2: "",
  photo_menu_3: "",
};

const TiendaDetalles = () => {
  const [store, setStore] = useState(initialValue);
  const {
    Stand,
    name,
    logo,
    phone,
    days_open,
    schedule,
    level,
    title,
    description,
    photo_menu_1,
    photo_menu_2,
    photo_menu_3,
  } = store;

  const { id } = useParams();

  useEffect(() => {
    loadStoreData();
  }, []);

  const loadStoreData = async () => {
    const response = await getallStores(id);
    setStore(response.data);
  };

  return (
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
        <Divider border="solid 3px" />
        <AbsoluteCenter bg="#edf0f0" px="400">
          <Heading as="h1" fontSize="35px" align="center">
            {" "}
            BIENVENIDO{" "}
          </Heading>
        </AbsoluteCenter>
      </Box>
      <Box color="#7d7d7d">
        <Text fontSize="20px" align="center">
          {name}
        </Text>
      </Box>
      <HStack width="auto">
        <Box
          position="relative"
          padding="10"
          bg="#edf0f0"
          w="100%"
          height="1200px"
        >
          <Grid
            templateAreas={`
            "nav main"
            "nav footer""header header"`}
            gridTemplateRows={"200px 1fr 50px"}
            gridTemplateColumns={"700px 2fr"}
            h="400px"
            gap="1"
            color="blackAlpha.700"
            fontWeight="bold"
          >
            <GridItem pl="3" bg="white" height="500px" area={"nav"}>
              <Box>
                <Image
                  src="./src/img/paap.jpg"
                  height="500px"
                  width="700px"
                  alt="logo"
                  align="center"
                ></Image>
              </Box>
            </GridItem>
            <GridItem pl="3" bg="white" width="250px" area={"main"}>
              <Box>
                {name}
                <Image
                  src={logo}
                  height="150px"
                  width="90px"
                  alt="eee"
                  position="relative"
                  display="block"
                  margin="auto"
                  align="right"
                ></Image>
              </Box>
            </GridItem>

            <GridItem pl="3" bg="white" width="250px" area={"footer"}>
              <Box>
                <Box height="50px"></Box>

                <HStack>
                  <Image src="./src/img/wsp.png"></Image>
                  <Text color="black">{phone}</Text>
                </HStack>
                <HStack>
                  <Image
                    src="./src/img/reloj.png"
                    alt="icono"
                    width="50px"
                  ></Image>
                  <Text color="black" align="center">
                   Días: {days_open}
                   Hora: {schedule}
                  </Text>
                </HStack>
                <HStack>
                  <Image src="./src/img/mapa.png"></Image>
                  <Text color="black">{level}</Text>
                </HStack>
              </Box>
            </GridItem>

            <GridItem pl="3" bg="white" height="450px" area={"header"}>
              <Box>
                <HStack spacing="220px">
                  <Box w="500px" h="200px" bg="white">
                    <Box height="50px"></Box>
                    <Text color="black">
                     {description}
                    </Text>
                  </Box>
                  <Box w="200px" h="150px" bg="#f6d4fc">
                    <Image
                      src="./src/img/Star.png"
                      alt="estrella"
                      position="relative"
                      display="block"
                      margin="auto"
                      align="right"
                    ></Image>
                  </Box>
                </HStack>
                <HStack justifyContent="center">
                  <Image src="./src/img/papa1 1.png" alt="platos"></Image>
                  <Image src="./src/img/3 1.png" alt="platos"></Image>
                  <Image src="./src/img/8 1.png" alt="platos"></Image>
                </HStack>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </HStack>
    </VStack>
  );
};


export default TiendaDetalles;
