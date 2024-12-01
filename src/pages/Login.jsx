import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { 
  Flex, Heading, Input, Button, InputGroup, Stack, Box, Avatar, 
  FormControl, FormLabel, Select, useToast 
} from "@chakra-ui/react";

const Login = () => {
  const { login, isAuth } = useContext(AuthContext);
  const [isRegistering, setIsRegistering] = useState(false); // Estado para controlar si está en el formulario de registro
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    pass: "",
    confirmPass: "",
    fullName: "",
    role: "user", // Rol por defecto
  });
  const [error, setError] = useState("");
  const [roles, setRoles] = useState([]);
  const toast = useToast();

  // Obtener los roles desde la API
  useEffect(() => {
    fetch("https://plazasantander-api.onrender.com/roles")
      .then((response) => response.json())
      .then((data) => setRoles(data.records || [])) // Ajusta según la estructura real de tu API
      .catch((error) => console.error("Error fetching roles:", error));
  }, []);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const { user, pass } = formData;

    fetch("https://plazasantander-api.onrender.com/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password: pass }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          login(user, pass); // Método del contexto para manejar el inicio de sesión
          toast({
            title: "Inicio de sesión exitoso",
            description: "Bienvenido a tu cuenta.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } else {
          setError("Usuario o contraseña incorrectos");
        }
      })
      .catch((error) => {
        console.error("Error al iniciar sesión:", error);
        setError("Ocurrió un error al intentar iniciar sesión");
      });
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    if (formData.pass !== formData.confirmPass) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const { user, fullName, email, pass, role } = formData;

    const data = {
      name: user,
      last_name: fullName,
      username: user,
      password: pass,
      email: email,
      rol_id: parseInt(role), // Se asegura que el rol sea un ID numérico
    };

    fetch("https://plazasantander-api.onrender.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          toast({
            title: "Registro exitoso",
            description: "Tu cuenta ha sido creada con éxito.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setIsRegistering(false); // Cambia al formulario de inicio de sesión
        } else {
          setError("Error al registrar el usuario");
        }
      })
      .catch((error) => {
        console.error("Error al registrar el usuario:", error);
        setError("Ocurrió un error al intentar registrarte");
      });
  };

  if (isAuth()) {
    return <Navigate to="/mantenimiento" />;
  }

  return (
    <Flex
      flexDirection="column"
      width="100vw"
      height="80vh"
      backgroundColor="#FFFFFF"
      justifyContent="center"
      alignItems="center"
    >
      <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
        <Avatar bg="#BA1FB5" />
        <Heading color="#BA1FB5">{isRegistering ? "Registrarse" : "Bienvenido"}</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={isRegistering ? handleRegisterSubmit : handleLoginSubmit}>
            <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
              {/* Formulario de inicio de sesión */}
              {!isRegistering && (
                <>
                  <FormControl>
                    <FormLabel>Nombre de Usuario</FormLabel>
                    <InputGroup>
                      <Input
                        type="text"
                        placeholder="Nombre de Usuario"
                        name="username"
                        value={formData.user}
                        onChange={(e) => setFormData({ ...formData, user: e.target.value })}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Contraseña</FormLabel>
                    <InputGroup>
                      <Input
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        value={formData.pass}
                        onChange={(e) => setFormData({ ...formData, pass: e.target.value })}
                      />
                    </InputGroup>
                  </FormControl>
                </>
              )}

              {/* Formulario de registro */}
              {isRegistering && (
                <>
                  <FormControl>
                    <FormLabel>Nombre</FormLabel>
                    <InputGroup>
                      <Input
                        type="text"
                        placeholder="Nombre"
                        name="name"
                        value={formData.user}
                        onChange={(e) => setFormData({ ...formData, user: e.target.value })}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Apellido</FormLabel>
                    <InputGroup>
                      <Input
                        type="text"
                        placeholder="Apellido"
                        name="last_name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <InputGroup>
                      <Input
                        type="email"
                        placeholder="Correo Electrónico"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Contraseña</FormLabel>
                    <InputGroup>
                      <Input
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        value={formData.pass}
                        onChange={(e) => setFormData({ ...formData, pass: e.target.value })}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Confirmar Contraseña</FormLabel>
                    <InputGroup>
                      <Input
                        type="password"
                        placeholder="Confirmar Contraseña"
                        name="confirm_password"
                        value={formData.confirmPass}
                        onChange={(e) => setFormData({ ...formData, confirmPass: e.target.value })}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Rol</FormLabel>
                    <Select
                      name="rol_id"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="Selecciona un rol"
                    >
                      {roles.map((role) => (
                        <option key={role.id} value={role.id}>
                          {role.name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </>
              )}

              {error && <Box color="red.500">{error}</Box>}

              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                backgroundColor="#BA1FB5"
                color="#FFFFFF"
                width="full"
              >
                {isRegistering ? "Registrarse" : "Ingresar"}
              </Button>
            </Stack>
          </form>

          <Button
            variant="link"
            onClick={() => setIsRegistering(!isRegistering)}
            color="#BA1FB5"
            width="full"
            mt={2}
          >
            {isRegistering
              ? "¿Ya tienes cuenta? Inicia sesión"
              : "¿No tienes cuenta? Regístrate"}
          </Button>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
