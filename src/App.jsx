import React, { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home.jsx'
import Video from './Pages/Video/Video.jsx'

function App() {

  const [sidebar,setSidebar] = useState(true)
  const [search,setSearch] = useState('')



  return (
    <div>
      <Navbar   setSearch={setSearch} setSidebar={setSidebar} />
      <Routes>
        <Route exact path='/' element={ <Home search={search} setSearch={setSearch} sidebar={sidebar}/>}/>
        <Route exact path='/video/:categoryId/:videoId' element={<Video/>}/>
       </Routes>
    </div>
  )
}

export default App
