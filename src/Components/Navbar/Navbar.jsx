import React , {useRef, useState} from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link ,useNavigate } from 'react-router-dom'



function Navbar({setSidebar,setSearch}) {
  const nav = useNavigate()
  const [inputVal,setInputVal] = useState('')
  const input = useRef();
  const updateSearch = (e) => {
 
    const value = e.currentTarget.value
        const trimedVal = value.trim()
       
        if(e.key === 'Enter'  &&( trimedVal.length > 0) ){
           nav('/')
          console.log(  value.trimStart());
           setSearch(value.trimStart());

          }
      
  }
  


  return (
    <nav className='flex-div'>
    <div className='nav-left flex-div'>
    <img className='menu-icon' onClick={()=>{setSidebar(prev=> !prev)}} src={menu_icon}/>
    <Link to={'/'}  ><img className='logo' onClick={()=>{setSearch('')}} src={logo}/></Link>
    </div>

    <div className='nav-middle flex-div'>
    <div className='search-box flex-div'>
       <input type='text' value={inputVal} onChange={(e)=>{setInputVal(e.currentTarget.value)}} ref={input} placeholder='Search' onKeyDown={(e)=>{
      updateSearch(e);
        
        }} />
     <img src={search_icon} onClick={()=>{  
      const value = input.current.value
        const trimedVal = value.trim()
        if(( trimedVal.length > 0) ){ nav('/'); setSearch(value.trimStart())}}} alt=''/>
    </div>
    
    </div>

    <div className='nav-right flex-div'>
    
     <img src={upload_icon} alt=''/>
     <img src={more_icon} alt=''/>
     <img src={notification_icon} alt=''/>
     <img src={profile_icon} className='user-icon' alt=''/>
    </div>
      
    </nav>
  )
}

export default Navbar
