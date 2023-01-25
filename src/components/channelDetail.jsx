import React from 'react'
import { BsFillCheckCircleFill } from "react-icons/bs";

function channelDetail({channelDetail}) {
  return (
    <div className='text-center text-white mb-20'>
      <div className='banner-image' width={"100%"} height={"100%"}  style={{backgroundImage:`url(${channelDetail?.banner?.desktop[0]?.url})` }}></div>
      <img className='channel-card' src={channelDetail?.avatar[2]?.url} alt="" />
      <div className='flex justify-center items-center mt-5 flex-col'>
          <div className='flex items-center text-5xl font-semibold'>
            <span className='mr-2'>{channelDetail?.title}</span>
            <span>
              {channelDetail?.badges[0]?.type ===
                "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-black/[0.5] text-[12px] ml-1" />
              )}
            </span>
          </div>
          <div>{channelDetail?.stats?.subscribersText}</div>
      </div>
    </div>
  )
}

export default channelDetail