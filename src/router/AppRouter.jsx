import { Route, Routes } from 'react-router-dom'
import AppOutlet from './AppOutlet'

import Home from '../pages/Home'
import Products from '../pages/Products'
import Tiendas from '../pages/Tiendas'
import Tiendadetalles from '../pages/Tiendadetalles'
const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<AppOutlet />}>
                <Route index element={<Home />} />
                <Route path='productos' element={<Products />} />
                <Route path='tiendas' element={<Tiendas />} />
                <Route path='tiendadetalles' element={<Tiendadetalles />} />
            </Route>
        </Routes>
    )
}

export default AppRouter
