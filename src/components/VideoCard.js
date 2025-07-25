const VideoCard = ({info}) => {
    
    const{snippet} = info;
    const{title, channelTitle, thumbnails} =snippet;
    
    return(
        <div className="p-2 m-2 w-[310px] shadow-lg">
            <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url}/>
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{info?.statistics?.viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard;