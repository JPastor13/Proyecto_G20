import { Route, Routes } from 'react-router-dom'
import AppOutlet from './AppOutlet'

import Home from '../pages/Home'
import Tiendas from '../pages/Tiendas'
import Tiendadetalles from '../pages/Tiendadetalles'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<AppOutlet />}>
                <Route index element={<Home />} />
                <Route path='tiendas' element={<Tiendas />} />
                <Route path='/tiendadetalles/:id' element={<Tiendadetalles/>}/>
            </Route>
        </Routes>
    )
}

export default AppRouter
