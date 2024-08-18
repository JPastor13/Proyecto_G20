import { Route, Routes } from 'react-router-dom'
import AppOutlet from './AppOutlet'

import Home from '../pages/Home'
import Tiendas from '../pages/Tiendas'
import Tiendadetalles from '../pages/Tiendadetalles'
import Raffos from '../pages/Raffos'
import Rincon from '../pages/Rincon'
import Donfra from '../pages/Donfra'
import Delys from '../pages/Delys'
import Juan316 from '../pages/Juan316'
import Sushi from '../pages/Sushi'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<AppOutlet />}>
                <Route index element={<Home />} />
                <Route path='tiendas' element={<Tiendas />} />
                <Route path='tiendadetalles' element={<Tiendadetalles />} />
                <Route path='raffos' element={<Raffos />} />
                <Route path='rincon' element={<Rincon />} />
                <Route path='donfra' element={<Donfra />} />
                <Route path='delys' element={<Delys />} />
                <Route path='juan316' element={<Juan316 />} />
                <Route path='sushi' element={<Sushi />} />
         
            
                
                
            </Route>
        </Routes>
    )
}

export default AppRouter
