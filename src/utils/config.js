export const commentsData = [
    {
        name:"AlphaX",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        Reply: [
            {
                name:"AlphaX",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                Reply: [
                    {
                        name:"AlphaX",
                        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                        Reply: [
                            {
                                name:"AlphaX",
                                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                                Reply: [
                                    {
                                        name:"AlphaX",
                                        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                                        Reply: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name:"AlphaX",
                        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                        Reply: []
                    },
                ]
            },
            {
                name:"AlphaX",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                Reply: [
                    {
                        name:"AlphaX",
                        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                        Reply: []
                    }
                ]
            }
        ]
    },
    {
        name:"AlphaX",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        Reply:[]
    },
    {
        name:"AlphaX",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        Reply:[]
    },
    {
        name:"AlphaX",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        Reply:[]
    }
]

export const LIVE_CHAT_COUNT = 20;

export const GOOGLE_API_KEY = "AIzaSyA0MO-5cBD1V2rfNvpJkzA2ianKUfCdjEE";

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ GOOGLE_API_KEY;

export const YOUTUBE_SPECIFIC_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&id=";
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Csuggestions%2Cplayer&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY]
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY]

export const YOUTUBE_SPECIFIC_CHANNEL_API = "https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails&id=";

export const YOUTUBE_AUTOSUGGEST_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=[SEARCH_QUERY]&key=["YOUR_API_KEY] - From Youtube_Data_V3 API (not autosuggest api, just search video API)
// https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=[SEARCH_QUERY] - unable to parse response of this API, but gives response 

export const YOUTUBE_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

export const YOUTUBE_SPECIFIC_VIDEO_COMMENTS_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=15&textFormat=plainText&videoId=";

//https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY]
// https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id={$channelId}&key={$API}
/* just create a comma separated list for the different channelIds and then call

    https://www.googleapis.com/youtube/v3/channels?part=snippet&id='+commaSeperatedList+'&fields=items(id%2Csnippet%2Fthumbnails)&key={YOUR_API_KEY}
therefore you don't have to send a request for each item */





//Youtube Data API V3 - is an API given by Youtube for free, -> to use Youtube Data (such as videos, playlist, Channels)
//                    - is an API provides access to Youtube Data

/**
 * HOW TO GET UR OWN YOUTUBE API KEY - Google Cloud Console API Key 
 * ->Login with google acc in Google Developer console site (Google Cloud Platform)
 * ->Create project in Google Cloud Console
 * ->Click ___enable API & Services___ or Go to ___Library___ to enable which API u need to use
 * Library - is a API LIbrary place where all API will be available for each app (Gmail API, Google Sheet API, Maps API, Google Drive API etc)
 * ->In Library, Navigate to the section YouTube APIs and select YouTube Data API v3
 * ->At the YouTube Data API page, click a Enable button.
 */