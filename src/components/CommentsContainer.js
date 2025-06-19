import { useEffect, useState } from "react";
import { commentsData, YOUTUBE_SPECIFIC_VIDEO_COMMENTS_API, GOOGLE_API_KEY} from "../utils/config";
import Comments from "./Comments";

const CommentsContainer = ({videoID}) => {

    const[videoComments, setVideoComments] = useState([]);

    useEffect(()=>{
        getVideoComments();
    },[])

    const getVideoComments = async () => {
        const data = await fetch(YOUTUBE_SPECIFIC_VIDEO_COMMENTS_API+videoID+"&key="+GOOGLE_API_KEY);
        const json = await data.json();
        console.log("comments ", json);
        setVideoComments(json.items);
    }

    return(
        <div>
            <h1 className="font-bold text-xl">Comments</h1>
            {
                videoComments.map(comment => (
                    <Comments key={comment.id} info={comment}/> 
                ))
            }
        </div>
    )
}

export default CommentsContainer;