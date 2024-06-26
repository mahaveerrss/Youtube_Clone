import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

 
function Home({sidebar,search,setSearch}) {
  const [category,setCategory] = useState(0)
  return (
   <>
    <Sidebar sidebar={sidebar} setSearch={setSearch} category={category} setCategory={setCategory} />
    <div className={`container ${sidebar ? '': 'large-container'}`}> 
      <Feed category={category} search={search}/>
    </div>
   </>
  )
}

export default Home
