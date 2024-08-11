import { Box, HStack, Image, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <HStack bgColor={{ base: 'blue', md: 'yellow', lg: 'red' }}
        height='120px' justifyContent='space-between'>
            {/* logo de la plaza */}
            <Image src="" alt="logo de la plaza" />

            <VStack>
                <Box>hola</Box>
                <HStack textTransform='uppercase'>
                    <Link to='/tiendas'>Tiendas</Link>
                    <Link to='/productos'>Productos</Link>
                </HStack>
            </VStack>
        </HStack>
    )
}

export default Header
