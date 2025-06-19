import { useEffect} from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/config";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoList } from "../utils/appSlice";

const VideoContainer = () => {
    // const [videos, setVideos] = useState([]);
    const dispatch = useDispatch();

    const videoData = useSelector((store) => store.app.videoList);

    useEffect( ()=>{
        getVideos();
    },[]);

    const getVideos = async () => {
       const data = await fetch(YOUTUBE_VIDEOS_API);
       const json = await data.json();
      //dispatch an action       //setVideos(json.items);
       dispatch(getVideoList(json.items));
    }

    return(
        <div className="flex flex-wrap">
            { 
               videoData.map(video => (
                // or to="/watch/v="+video.id
                    <Link to={"/watch?v="+(typeof video.id === 'object' ? video.id.videoId : video.id)} 
                      key={video?.id?.videoId ? video.id.videoId : video.id}
                    > 
                        <VideoCard info={video} />
                    </Link>
               )) 
            }
        </div>
    )
}

export default VideoContainer;