


export const API_KEY = import.meta.env.VITE_API_KEY
 
export const valueConverter = (value)=>{
    if(value >= 1000000){
        return `${(value/1000000).toFixed(1)}M`
    }
    else if(value >=1000){
        return `${(value/1000).toFixed(1)}K`
    }
    else{
        return value
    }
}
export const fetchVideoData = async(videoId) => {
    // fetching video data
  const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
  const fetch = await fetch(videoDetails_url)
  return fetch
}