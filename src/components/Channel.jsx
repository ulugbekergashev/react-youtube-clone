  import React, {useState, useEffect, useContext} from 'react'
  import {useParams} from "react-router-dom"
  import { fetchDataFromApi } from './../utils/api';
  import { Context } from "../context/contextApi";
  import ChannelDetail from './channelDetail';
  import ChannelCard from './ChannelCard';

  function Channel() {
  	const { id } = useParams()
    const {loading, setLoading } = useContext(Context);
    const [channelDetail, setChannelDetail] = useState()
    const [videos , setVideos] = useState([])

    useEffect(()=>{
      document.getElementById("root").classList.add("custom-h");
      fetchChannelDetail()
      fetchVideos()
    },[id])
    
    console.log(videos)
    
      const fetchChannelDetail = () => {
        setLoading(true);
        fetchDataFromApi(`channel/details/?id=${id}`).then((res) => {
            setChannelDetail(res);
            setLoading(false);
        });
  };
  const fetchVideos = () => {
    setLoading(true);
    fetchDataFromApi(`channel/videos/?id=${id}`).then((res) => {
        setVideos(res?.contents);
        setLoading(false);
    });
};
 
    return (
      <div className='bg-black'>
          ChannelId : {id}
          <div>
            <ChannelDetail  channelDetail={channelDetail} />
          </div>
          <div>
            <div className='container m-auto flex items-center flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5'>
              {
                videos.map(item => <ChannelCard key={item?.video?.videoId} videos={item}></ChannelCard>)
              }
            </div>


          </div>
      </div>  
    )
  }

  export default Channel

