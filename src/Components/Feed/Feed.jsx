import React, { useEffect, useState } from "react";
import "./Feed.css";
import {API_KEY,valueConverter,fetchVideoData} from '../../data.js'
import moment from "moment";
import { Link } from "react-router-dom";

function Feed({category,search}) {

  const [data,setData] = useState([])
 

    const fetchData = async ()=>{
      if(search){
        const videoList_url= `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${search}&key=${API_KEY}`
        await fetch(videoList_url).then(res=>res.json()).then(data=>{setData(data.items)});
       
        return;
      }
      const videoList_url= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
      await fetch(videoList_url).then(res=>res.json()).then(data=>{setData(data.items)});
      return;
    }
    

    useEffect(()=>{
      fetchData();
      
    },[category,search])
    
  return (
    <div className="feed">
    {data.map((item,index)=>{
      return (
         <Link to={ search?`video/${category}/${item.id.videoId}` : `video/${item.snippet.categoryId}/${item.id}` } className="card " key={index}>
        <img src={item.snippet.thumbnails.medium.url} />
        <h2>{item.snippet.title}</h2>
        <h3>{item.snippet.channelTitle}</h3>
        <p>{ valueConverter(item.statistics?.viewCount)  } views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
      </Link>
      )
    })}
     
     
    </div>
  );
}

export default Feed;
