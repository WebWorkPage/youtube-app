import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, YOUTUBE_SPECIFIC_VIDEO_API, YOUTUBE_SPECIFIC_CHANNEL_API} from "../utils/config";
import { month } from "../utils/helper";
import CommentsContainer from "./CommentsContainer";
import Livechat from "./LiveChat";

const WatchPage = () => {
    const [videoData, setVideoData] = useState([]);
    const[channelData, setChannelData] = useState([]);
    const dispatch = useDispatch();

    // const params = useParams();
    // console.log(params); //returns empty since its not a /parameter=""

    const[searchParams] = useSearchParams();
    const videoId = searchParams.get("v");

    useEffect(()=>{
        dispatch(closeMenu());  //to close the sideBar in watchPage
        getVideoData();  //to fetch specific video data
    },[])

    useEffect(()=>{
        if(document.querySelector('iframe') != null){
            document.querySelector('iframe').width = "950";
            document.querySelector('iframe').height = "500";
        }
        getChannelData();
    },[videoData])

    const getVideoData = async () => {
        const data = await fetch(YOUTUBE_SPECIFIC_VIDEO_API+videoId+"&key="+GOOGLE_API_KEY);
        const json = await data.json();
        setVideoData(json.items);
    }

    const getChannelData = async () => { //for getting channel thumbnail to use in Profile 
        const data = await fetch(YOUTUBE_SPECIFIC_CHANNEL_API+videoData[0]?.snippet?.channelId+"&key="+GOOGLE_API_KEY);
        const json = await data.json();
        setChannelData(json.items);
    }

    if(videoData.length === 0) return null;

    const{player, snippet, statistics} = videoData[0];
    const htmlString = player.embedHtml;
    const theObj = {__html:htmlString};
    const date = new Date(snippet.publishedAt);
    
    // const parser = new DOMParser();
    // const doc = parser.parseFromString(player.embedHtml, "text/html");
    // console.log(doc.body.firstChild);

    return(
        <div className="px-6 w-8/12 w-full">
            <div className="flex">
                <div>
                    <div className="rounded-full" dangerouslySetInnerHTML={theObj} />
                    <h1 className="py-3 font-bold text-xl">{snippet.title}</h1>
                </div>
                <div className="w-full"> <Livechat/> </div>
            </div>

            <div className="flex">
                <img 
                  className="rounded-full h-10"
                  alt="channel_Profile" 
                  src={channelData && channelData[0]?.snippet?.thumbnails?.default?.url}
                />
                <h1 className="mx-4">{snippet.channelTitle}</h1>
                <button className="bg-black text-white rounded-full px-4 mx-3">Subscribe</button>
            </div>

            <div className="bg-gray-100 my-4 p-4 rounded-lg">
                <span>{statistics.viewCount} views </span>
                <span>{month[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear()}</span>
                <p>{snippet.description}</p>
            </div>

            <div>
                <CommentsContainer videoID={videoId} />
            </div>
        </div>
    );
}

export default WatchPage;




/**
 * normal params in url = /v="df" - useParams()
 * ?v="df" -> (knon as quer string params) search params in url - useSearchParams()
 * 
 *  let mystr = "<input class="text-box single-line" id="item_Name" name="item.Name" type="text" value="Luis Tiant">"
    var res = mystr.match(/value=\".*\"/g);
    var str = mystr.replace(res, 'value=""');

    _____________If you have an id, you could use getElementById__________
    If (document.getElementById("demo") != null) {
    // exists, do something...
    }
    if you’re looking for a type of element, you could use get

    if (document.getElementsByTagName("li").length > 0) {
    // exists, do something
    }
    Or for something more complex, you could use query

    if (document.querySelector("p.x2") != null) {
    // exists, do something
}
 */