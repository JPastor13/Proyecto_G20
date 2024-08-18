import React, { useEffect, useState } from "react";
import { deleteStores, getallStores } from "../service/api";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Container
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
/*
const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px 100px 100px 140px',
    },
    thead:{
        '& > *':{
            background: '#000000',
            color:'#FFFFFF',
            fontSize: '16px'
        }
    },
    trow:{
        '& > *':{
            fontSize: '16px'
        }
    }
})
*/
const AllStores = () => {
  /*const classes = useStyle();*/

  const [store, setStore] = useState([]);
  useEffect(() => {
    getStores();
  }, []);

  const getStores = async () => {
    const response = await getallStores();
    console.log(response);
    setStore(response.data);
  };

  const deleteData = async (id) => {
    await deleteStores(id);
    getStores();
  };

  return (
    <Container>
      <Button>
        <Link to={'/addstores'}>Agregar Tienda</Link>
      </Button>
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>NRO. STAND</Th>
            <Th>TIENDA</Th>
            <Th>HORARIO</Th>
            <Th>TELÉFONO</Th>
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
                <Button onClick={() => deleteData(data.id)} style={{margin: '0px 20px'}} >
                 Eliminar
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default AllStores;
