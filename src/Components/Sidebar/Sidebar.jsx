import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

function Sidebar({sidebar,category,setCategory,setSearch}) {
  return (
    <div className={`sidebar ${sidebar ? '': "small-sidebar" }`}>
    <div className='sortcut-links'>
    <div className={`side-link ${category===0 ? 'active': ''}`} onClick={()=>{setCategory(0);setSearch(null)}}>
    <img src={home}/><p>Home</p>
    </div>
    <div className={`side-link ${category===20 ? 'active': ''}`} onClick={()=>{setCategory(20);setSearch(null)}}>
    <img src={game_icon}/><p>Game</p>
    </div>
    <div className={`side-link ${category===2 ? 'active': ''}`} onClick={()=>{setCategory(2);setSearch(null)}}>
    <img src={automobiles}/><p>Automobiles</p>
    </div>
    <div className={`side-link ${category===17 ? 'active': ''}`} onClick={()=>{setCategory(17);setSearch(null)}}>
    <img src={sports}/><p>Sports</p>
    </div>
    <div className={`side-link ${category===24 ? 'active': ''}`} onClick={()=>{setCategory(24);setSearch(null)}}>
    <img src={entertainment}/><p>Entertainment</p>
    </div>
    <div className={`side-link ${category===28 ? 'active': ''}`} onClick={()=>{setCategory(28);setSearch(null)}}>
    <img src={tech}/><p>Technology</p>
    </div>
    <div className={`side-link ${category===10 ? 'active': ''}`} onClick={()=>{setCategory(10);setSearch(null)}}>
    <img src={music}/><p>Music</p>
    </div>
    <div className={`side-link ${category===22 ? 'active': ''}`} onClick={()=>{setCategory(22);setSearch(null)}}>
    <img src={blogs}/><p>Blogs</p>
    </div>
    <div className={`side-link ${category===25 ? 'active': ''}`} onClick={()=>{setCategory(25);setSearch(null)}}>
    <img src={news}/><p>News</p>
    </div>
    <hr/>
    </div>
    <div className='subscribed-list'>
        <h3>Subscribed</h3>
        <div className='side-link'>
            <img src={jack}/><p>PewDiePie</p>
        </div>
        <div className='side-link'>
            <img src={simon}/><p>MrBeast</p>
        </div>
        <div className='side-link'>
            <img src={tom}/><p>Justine Bieber</p>
        </div>
        <div className='side-link'>
            <img src={megan}/><p>MR Fox</p>
        </div>
        <div className='side-link'>
            <img src={cameron}/><p>5min-Craft</p>
        </div>
    </div>
    </div>
  )
}
 export default Sidebar
