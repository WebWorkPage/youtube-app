import { useDispatch, useSelector } from "react-redux";
import { getVideoList, toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_AUTOSUGGEST_SEARCH_API, YOUTUBE_SEARCH_API, GOOGLE_API_KEY } from "../utils/config";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
    const[searchQuery, setSearchQuery] = useState("");
    const[suggesstions, setSuggesstions] = useState([]);
    const[showSuggesstions, setShowSuggesstions] = useState(false);

    const searchCache = useSelector((store) => store.search);

    const dispatch = useDispatch();

    useEffect(()=>{  //debouncing achieved in react with help of useEffect & setTimeOut

      //make an api call after every key press
      //but if the difference btwn 2 api call is < 200ms
      //decline api call

      /**
       * searchCache = {
       *    "ip" : ["iphone 11", "iphone pro max"],
       *    "iph" : ["", "", ""],
       *    "iphon" : ["", "", ""],
       * }
       */

      //This is debouncing 
      const timer = setTimeout(()=>{

        //cache concept - make api call if searchQuery is not present in previous api response (ie suggesstions state)
        if(searchCache[searchQuery]){  // or searchCache.searchQuery - CHECK?
          setSuggesstions(searchCache[searchQuery]); // or searchCache[searchQuery] - not working - CHECK?
        }
        else{
          getSearchSuggesstions();
        }

      }, 200);  //make api call after 200ms

      return () => {  //called when comp unmounts/re-renders
        clearTimeout(timer);
      }

    },[searchQuery])

    /**
     * key - i
     * -render comp
     * -useEffect()
     * -start timer => make api call after 200ms
     * 
     * if u press 'p' before 200ms
     * key-ip
     * -destroy the comp (useeffect return () called) - even before 200ms get finished/expired - setTimeout gets destroyed
     * -re-render comp
     * -useEffect()
     * -New timer setup starts => make api call after 200ms
     * 
     * if no key press after 2 stroke - API CALL MADE AFTER 200MS BY SetTimeout()
     * 
     * browser - incharge of running timer, if u not clearTimeout when unmounting/re-rendering comp, the setTimer will still be running in bg separately even after re-rendered is happened ( and A new timer gets started when re-rendered) - SO 2 API CALLs MADE FOR 2 KEY PRESS WHEN CLEARTIMEOUT IS NOT USED
     * WHEN CLEARTIMEOUT USED - 1 API CALL MADE FOR 2 KEY PRESS  
     * 
     */

    const getSearchSuggesstions = async () => {
      const data = await fetch(YOUTUBE_AUTOSUGGEST_SEARCH_API+searchQuery);
      const json = await data.json();
      setSuggesstions(json[1]);

      //update cacheResults in store
      dispatch( cacheResults( {[searchQuery] : json[1]} ) );
    }

    const getSearchVideo = async (s) => {
      setSearchQuery(s);    //to display the selected search suggestion keyword in i/p box
      const data = await fetch(YOUTUBE_SEARCH_API+s+"&type=video&key="+GOOGLE_API_KEY);
      const json = await data.json();
      
      //dispatch an action to list videos based on search keyword in landing page
      dispatch(getVideoList(json.items));
    }

    const toggleMenuHandler = () => {
         //dispatch an action in slice
          dispatch(toggleMenu());
    }

    return (
      <div className="grid grid-flow-col m-2 p-2 shadow-lg">
        <div className="flex col-span-1 items-center">
          <img
            className="h-9 cursor-pointer"
            alt="menu"
            src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
            onClick={toggleMenuHandler}
          />
          <a href="/">
            <img
              className="h-14 mx-1"
              alt="youtube-logo"
              src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            />
          </a>
        </div>

        <div className="col-span-10 text-center pt-3">
          <div>
            <input
              type="text"
              className="border border-gray-400 w-1/2 rounded-l-full p-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggesstions(true)}
              onBlur={() => setShowSuggesstions(false)}
            />
            <button className="border border-gray-400 rounded-r-full px-3 py-2 bg-gray-100">
              🔍
            </button>
          </div>
          {/* {showSuggesstions && (
            <div className="fixed bg-white ml-64 w-[37rem] rounded-lg shadow-lg border border-gray-100">
              <ul>
                {suggesstions.map((s) => (
                  <li key={s} tabIndex="0" className="py-2 shadow-sm hover:bg-gray-100 cursor-pointer">
                    <div onClick={() => console.log("Hello  --------------")} >
                      🔍 {s}
                    </div>
                  </li>
                ))}
              </ul>
            </div> )} */}
            {
              showSuggesstions && (
              <div className='fixed bg-white shadow-lg rounded-lg border border-gray-100 left-[510px] w-[35.2rem]'>
                <ul className='flex flex-col'>
                {
                  suggesstions.map(item => {
                    return(
                      <li key={item} className='flex gap-2 py-2 px-2 hover:bg-gray-100 items-center shadow-sm' onMouseDown={()=>getSearchVideo(item)}>🔍 {item}</li>
                    )
                  })
                }
                </ul>
              </div> 
              )
            }
        </div>

        <div className="col-span-1 pt-3">
          <img
            className="h-9"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
        </div>
      </div>
    );
}

export default Head;