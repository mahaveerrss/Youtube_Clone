import React, { useCallback, useEffect, useState } from "react";
import "./PlayVideo.css";
import { API_KEY, valueConverter } from "../../data.js";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import user_profile from "../../assets/user_profile.jpg";
import moment from "moment";

function PlayVideo({videoId}) {
    const [apiData,setApiData] = useState(null)
    const [channelData,setChannelData] = useState(null)
    const [commentData,setCommentData] = useState([])
 
    const fetchVideoData = useCallback(async() => {
   try {
       // fetching video data
       const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
       await fetch(videoDetails_url).then(res=>res.json()).then(data=>{setApiData(data.items[0])});
   } catch (error) {
     console.error(error)
   }
   })
    const fetchOtherData = useCallback(async() => {
if(apiData){
      try {
          // fetching channel  data
          const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet.channelId}&key=${API_KEY}`
  
          const channelDetails = await fetch(channelDetails_url);
          const cdata =  channelDetails.json()
           cdata.then(data=>{setChannelData(data.items[0])})
           
           // fetching comment data
           const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
            
           await fetch(comment_url).then(res=>res.json()).then(data=>{setCommentData(data.items)});
     
         return;
      } catch (error) {
        console.error(error)
      }
}
  })
    
    useEffect(()=>{fetchVideoData()},[videoId])
    useEffect(()=>{fetchOtherData()},[apiData])

  return (
    <div className="play-video ">
      {/* <video src={video1} controls autoPlay muted ></video> */}
      <iframe
        
        src= {`https://www.youtube.com/embed/${videoId}?autoplay=1` }
        
       frameBorder={'0'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{apiData?apiData.snippet.title:'Title'}</h3>
      <div className="play-video-info">
        <p>{valueConverter(apiData?apiData.statistics.viewCount:0)} Views &bull; {moment(apiData?apiData.snippet.publishedAt:'Published at').fromNow()}</p>
        <div>
          <span>
            <img src={like} alt="" />
            {valueConverter(apiData?apiData.statistics.likeCount:0)}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" />
            share
          </span>
          <span>
            <img src={save} alt="" />
            save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:''} alt="" />
        <div>
          <p>{apiData?apiData.snippet.channelTitle:'Channel Name'}</p>
          <span>{valueConverter(channelData?channelData.statistics.subscriberCount:0)} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        
        <p>{apiData?apiData.snippet.description.slice(0,250):'Channel Description'}</p>
        <hr />
       {commentData ?  <h4>{valueConverter(apiData?apiData.statistics.commentCount:null)} comments</h4>: null}
        {commentData? commentData.map((item,index)=>{
            return (
                <div className="comment" key={index}>
                  <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                  <div>
                    <h3>
                      {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                      <span>
                        {moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}
                      </span>
                    </h3>
                    <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                    <div className="comment-action">
                      <img src={like} alt="" />
                      <span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                      <img src={dislike} alt="" />
                    </div>
                  </div>
                </div>
            )
        }) :  "Comment Disabled"}
 
      </div>
    </div>
  );
}

export default PlayVideo;
