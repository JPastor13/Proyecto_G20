import { Route, Routes } from 'react-router-dom'
import AppOutlet from './AppOutlet'

import Home from '../pages/Home'
import Tiendas from '../pages/Tiendas'
import Tiendadetalles from '../pages/Tiendadetalles'
import AllStores from '../Store/AllStores'
import EditStores from '../Store/EditStores'
import AddStores from '../Store/AddStores'
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
               
            </Route>
        </Routes>
    )
}

export default AppRouter
