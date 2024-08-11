import { Box, Flex, HStack, Image, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <HStack bgColor={{ base: '#F5F5F5', md: '#F5F5F5', lg: '#F5F5F5' }}
        height='151px' justifyContent='space-between'>
            {/* logo de la plaza */}
            <Image height='150px' width='217' src="./src/img/logo.png" alt="logo de la plaza"  />

            <VStack>

                <HStack  border='solid red 1px'>
                <Link  to='/tiendas' >Alquiler</Link>
                <Link to='/tiendas'>Plano del centro comercial</Link>
                <Link to='/tiendas'>Comó llegar</Link>
                <Link to='/tiendas'>Contactos</Link>
                </HStack>
                <HStack gap='20px' fontSize='20px' textTransform='uppercase'>
                    <Link to='/tiendas'>Tiendas</Link>
                    <Link to='/productos'>Entrenamientos</Link>
                    <Link to='/productos'>Productos</Link>
                    <Link to='/productos'>Productos</Link>
                </HStack>
            </VStack>
        </HStack>

    )
}

export default Header