import React, { useEffect, useState, useContext } from "react";
import { deleteStores, getallStores } from "../service/api";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import {
  TableContainer,
  TableCaption,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Button,
  Container,
  Text,
  HStack,
  VStack,
  Box,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AllStores = () => {

  const url = "https://plazasantanderapi.vercel.app/stores";
  const { user, logout, isAuth } = useContext(AuthContext);

  const [store, setStore] = useState([]);
  useEffect(() => {
    getStores();
  }, []);

  const getStores = async () => {
    const response = await getallStores(url);
    console.log(response);
    setStore(response.data);
  };

  const deleteData = async (id) => {
    await deleteStores(url, id);
    getStores();
  };

  if (!isAuth()) {
    return <Navigate to="/login" />;
  }


  return (
    <VStack spacing={4} align="stretch" p={5}>
      <FormControl as="fieldset">
        <HStack justifyContent="space-between" p={2}>
          <FormLabel as="legend">Usuario: {user.name}</FormLabel>
          <FormLabel as="legend">
            <Link onClick={logout}>
              Cerrar Sesión
            </Link>
          </FormLabel>
        </HStack>
        <Button >
          <Link to={"/addstores"} >Agregar Tienda</Link>
        </Button>
      </FormControl>
      <Box>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>NRO. STAND</Th>
                <Th>TIENDA</Th>
                <Th>DÍAS DE APERTURA</Th>
                <Th>HORARIO</Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {store.map((data, index) => (
                <Tr key={index}>
                  <Td>{data.id}</Td>
                  <Td>{data.Stand}</Td>
                  <Td>{data.name}</Td>
                  <Td>{data.days_open}</Td>
                  <Td>{data.schedule}</Td>
                  <Td>
                    <Button>
                      <Link to={`/editstores/${data.id}`}>Editar</Link>
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      onClick={() => deleteData(data.id)}
                      style={{ margin: "0px 20px" }}
                    >
                      Eliminar
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </VStack>
  );
};

export default AllStores;
