import React from 'react'
import VideoLength from '../shared/videoLength'
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from 'react-router-dom';

function Channelcard({videos}) {
  return (
    <Link to={`/video/${videos?.video?.videoId}`}>
    <div className='mb-8'>
        <div className='relative md:h-40 md:rounded-xl overflow-hidden'>
            <img
                className="h-full w-full object-cover"
                src={videos?.video?.thumbnails[0]?.url}
                alt={videos?.video.id}
            />
            {videos?.video?.lengthSeconds && (
                <VideoLength time={videos?.video?.lengthSeconds} />
            )}
        </div>
        <h2 className='leading-5 tracking-normal font-medium text-sm text-white'>{videos?.video.title.slice(0,70)}...</h2>
        <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
            <span>{`${abbreviateNumber(
                videos?.video?.stats?.views,
                2
            )} views`}</span>
            <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                .
            </span>
            <span className="truncate">
                {videos?.video?.publishedTimeText}
            </span>
        </div>
    </div>
    </Link>
  )
}

export default Channelcard