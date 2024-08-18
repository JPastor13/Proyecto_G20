import React, { useEffect, useState } from "react";

import { editStores, getallStores } from "../service/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Container,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
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

const EditStores = () => {
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

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
    console.log(store);
  };

  const editStoreDetails = async () => {
    await editStores(id, store);
    navigate("/allstores");
  };
  return (
    <Container>
      <Box my={5}>
        <Text>ACTUALIZAR TIENDA</Text>
        <FormControl>
          <Box>
            <FormLabel>STAND</FormLabel>
            <Input
              type="text"
              name="Stand"
              value={Stand}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>NOMBRE</FormLabel>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>LOGO</FormLabel>
            <Input
              type="text"
              name="logo"
              value={logo}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>TELEFONO</FormLabel>
            <Input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>DÍAS ABIERTO</FormLabel>
            <Input
              type="text"
              name="days_open"
              value={days_open}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>HORARIO</FormLabel>
            <Input
              type="text"
              name="schedule"
              value={days_open}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>NIVEL DE PISO</FormLabel>
            <Input
              type="text"
              name="level"
              value={level}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>TÍTULO</FormLabel>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>DESCRIPCIÓN</FormLabel>
            <Input
              type="text"
              name="description"
              value={description}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>FOTO 1</FormLabel>
            <Input
              type="text"
              name="photo_menu_1"
              value={photo_menu_1}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>FOTO 2</FormLabel>
            <Input
              type="text"
              name="photo_menu_2"
              value={photo_menu_2}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>FOTO 3</FormLabel>
            <Input
              type="text"
              name="photo_menu_3"
              value={photo_menu_3}
              onChange={(e) => onValueChange(e)}
            />
          </Box>

          <Box>
            <Button onClick={() => editStoreDetails()}>Actualizar</Button>
            <Button
              onClick={() => navigate("/allstores")}
              style={{ margin: "0px 20px" }}
            >
              Cancel
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Container>
  );
};

export default EditStores;
