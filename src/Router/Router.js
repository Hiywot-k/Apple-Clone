import React from 'react'
import Main from '../Sections/Main'
import { Route,Routes } from 'react-router-dom'
import Iphone from '../RoughtPages/Iphone'
import Mac from '../RoughtPages/Mac'
import Ipad from '../RoughtPages/Ipad'
import Watch from '../RoughtPages/Watch'
import Tv from '../RoughtPages/Tv'
import Music from '../RoughtPages/Music'
import Support from '../RoughtPages/Support'
import FouroFour from '../PageNot/FouroFour'
import IphoneProducts from '../ProductsPage/IphoneProducts'

export default function AppRout() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/iphone' element={<Iphone/>}/>
            <Route path='/Mac' element={<Mac/>}/>
            <Route path='/ipad' element={<Ipad/>}/>
            <Route path='/watch' element={<Watch/>}/>
            <Route path='/tv' element={<Tv/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/support' element={<Support/>}/>
            <Route path='/iphone/:ID' element={<IphoneProducts/>}/>
            <Route path='/*' element={<FouroFour/>}/>
            
        </Routes>

    </div>
  )
}
