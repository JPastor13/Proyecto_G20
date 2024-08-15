import {
  StackDivider,
  SimpleGrid,
  Stack,
  HStack,
  VStack,
  Box,
  CardBody,
  Image,
  Text,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  CardFooter,
  Card,
  AbsoluteCenter,
  Link
} from "@chakra-ui/react";
const Tiendas = () => {
  return (
    <VStack bg="#F9E9F8">
      <Box
        position="relative"
        padding="10"
        bg="#F9E9F8"
        w="100%"
        mt={100}
        p={2}
        color="#BA1FB5"
      >
        <Divider border="solid 3px"/>
        <AbsoluteCenter bg="#F9E9F8" px="400">
        <Heading as="h1" fontSize="40px" align="center">TIENDAS</Heading>
        </AbsoluteCenter>
      </Box>
      <Box color="#BA1FB5">
        <Text fontSize="20px" align="center">
          TODAS LAS TIENDAS
        </Text>
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
                    <Heading size="md"><Link href='/tiendadetalles'>MR. PAPA</Link></Heading>
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
                    <Heading size="md">RAFFO'S</Heading>
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
                    <Heading size="md">RINCÓN FRANCÉS</Heading>
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
                    <Heading size="md">DON FRANCISCO</Heading>
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
                    src="./src/img/logo_mrpapas.jpg"
                    alt="MR. PAPA"
                    borderRadius="lg"
                    w="100%"
                  />
                  <Stack mt="1">
                    <Heading size="md">MR. PAPA</Heading>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
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
                    <Heading size="md">MR. PAPA</Heading>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
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
                    <Heading size="md">MR. PAPA</Heading>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
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
                    <Heading size="md">MR. PAPA</Heading>
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
                    src="./src/img/logo_mrpapas.jpg"
                    alt="MR. PAPA"
                    borderRadius="lg"
                    w="100%"
                  />
                  <Stack mt="1">
                    <Heading size="md">MR. PAPA</Heading>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
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
                    <Heading size="md">MR. PAPA</Heading>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
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
                    <Heading size="md">MR. PAPA</Heading>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
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
                    <Heading size="md">MR. PAPA</Heading>
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
                    src="./src/img/logo_mrpapas.jpg"
                    alt="MR. PAPA"
                    borderRadius="lg"
                    w="100%"
                  />
                  <Stack mt="1">
                    <Heading size="md">MR. PAPA</Heading>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
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
                    <Heading size="md">MR. PAPA</Heading>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
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
                    <Heading size="md">MR. PAPA</Heading>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
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
                    <Heading size="md">MR. PAPA</Heading>
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
                    src="./src/img/logo_mrpapas.jpg"
                    alt="MR. PAPA"
                    borderRadius="lg"
                    w="100%"
                  />
                  <Stack mt="1">
                    <Heading size="md">MR. PAPA</Heading>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
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
                    <Heading size="md">MR. PAPA</Heading>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
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
                    <Heading size="md">MR. PAPA</Heading>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
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
                    <Heading size="md">MR. PAPA</Heading>
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
                    src="./src/img/logo_mrpapas.jpg"
                    alt="MR. PAPA"
                    borderRadius="lg"
                    w="100%"
                  />
                  <Stack mt="1">
                    <Heading size="md">MR. PAPA</Heading>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
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
                    <Heading size="md">MR. PAPA</Heading>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
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
                    <Heading size="md">MR. PAPA</Heading>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
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
                    <Heading size="md">MR. PAPA</Heading>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          </Stack>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Tiendas;
