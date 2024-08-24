import { Route, Routes } from 'react-router-dom'
import AppOutlet from './AppOutlet'


import Login from '../pages/Login'
import Home from '../pages/Home'
import Tiendas from '../pages/Tiendas'
import Tiendadetalles from '../pages/Tiendadetalles'
import AllStores from '../Store/AllStores'
import EditStores from '../Store/EditStores'
import AddStores from '../Store/AddStores'
import Contactos from '../pages/Contactos'
import Comollegar from '../pages/Comollegar'
import Eventos from '../pages/Eventos'
<<<<<<< HEAD

=======
>>>>>>> d3120d87abea53906d7a59f24345ea5b82f500a0
const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<AppOutlet />}>
           
                <Route index element={<Home />} />
                <Route path='tiendas' element={<Tiendas />} />
                <Route path='/tiendadetalles/:id' element={<Tiendadetalles/>}/>
                <Route path='addstores' element={<AddStores/>}/>
                <Route path='allstores' element={<AllStores />} />
                <Route path='/editstores/:id' element={<EditStores/>}/>
<<<<<<< HEAD
                <Route path='/login' element={<Login/>}/>
                <Route path='contactos' element={<Contactos />} />
                <Route path='eventos' element={<Eventos />} />
                <Route path='comollegar' element={<Comollegar />} />
=======
                <Route path='contactos' element={<Contactos />} />
                <Route path='eventos' element={<Eventos />} />
                <Route path='Comollegar' element={<Comollegar />} />
>>>>>>> d3120d87abea53906d7a59f24345ea5b82f500a0

            </Route>
        </Routes>
    )
}

export default AppRouter
