import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdOutlineWatchLater, MdOutlineMovieCreation, MdOutlineFeedback  } from "react-icons/md";
import { RiHistoryFill, RiLiveLine } from "react-icons/ri";
import { CgPlayList } from "react-icons/cg";
import { AiOutlineLike, AiOutlineShopping } from "react-icons/ai";
import { IoIosTrendingUp } from "react-icons/io";
import { PiMusicNotesThin, PiGameController } from "react-icons/pi";
import { IoSettingsOutline, IoHelpCircleOutline } from "react-icons/io5";

const Sidebar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    //Early Return Pattern
    if(!isMenuOpen) return null; //if isMenuOpen === false

    return(
        <div className="shadow-lg w-60 pl-3 pt-2 h-[86vh]">
            <div className="w-48 pb-4">
                <div className="flex gap-5 px-2 py-2 hover:bg-[#f1eeeece] rounded-lg"> <VscHome className="text-2xl"/><Link to="/">Home</Link> </div>
                <div className="flex gap-5 px-2 py-2 hover:bg-[#f1eeeece] rounded-lg"><SiYoutubeshorts className="text-2xl"/> Shorts</div>
                <div className="flex gap-5 px-2 py-2 hover:bg-[#f1eeeece] rounded-lg"><MdOutlineSubscriptions className="text-2xl"/> Subscription</div>
            </div>
            <hr/>
            
            <div className="w-48 py-4">
                <h1 className="font-bold px-2">You</h1>
                <div className="flex gap-5 px-2 py-2 hover:bg-[#f1eeeece] rounded-lg"><RiHistoryFill className="text-2xl"/> History</div>
                <div className="flex gap-5 px-2 py-2 hover:bg-[#f1eeeece] rounded-lg"><CgPlayList className="text-2xl"/> Playlists</div>
                <div className="flex gap-5 px-2 py-2 hover:bg-[#f1eeeece] rounded-lg"><MdOutlineWatchLater className="text-2xl"/> Watch Later</div>
                <div className="flex gap-5 px-2 py-2 hover:bg-[#f1eeeece] rounded-lg"><AiOutlineLike className="text-2xl"/> Liked videos</div>
            </div>
            <hr/>
           
            <div className="w-48 py-4">
                <h1 className="font-bold px-2">Explore</h1>
                <div className="flex gap-5 px-2 py-2 hover:bg-[#f1eeeece] rounded-lg"><IoIosTrendingUp className="text-2xl"/> Trending</div>
                <div className="flex gap-5 px-2 py-2 hover:bg-[#f1eeeece] rounded-lg"><AiOutlineShopping className="text-2xl"/> Shopping</div>
                <div className="flex gap-5 px-2 py-2 hover:bg-[#f1eeeece] rounded-lg"><PiMusicNotesThin className="text-2xl"/> Music</div>
                <div className="flex gap-5 px-2 py-2 hover:bg-[#f1eeeece] rounded-lg"><MdOutlineMovieCreation className="text-2xl"/> Flims</div>
                <div className="flex gap-5 px-2 py-2 hover:bg-[#f1eeeece] rounded-lg"><RiLiveLine className="text-2xl"/> Live</div>
                <div className="flex gap-5 px-2 py-2 hover:bg-[#f1eeeece] rounded-lg"><PiGameController className="text-2xl"/> Gaming</div>
            </div>
            <hr/>

            <div className="w-48 py-4">
                <div className="flex gap-5 px-2 py-2 hover:bg-[#f1eeeece] rounded-lg"><IoSettingsOutline className="text-2xl"/> Settings</div>
                <div className="flex gap-5 px-2 py-2 hover:bg-[#f1eeeece] rounded-lg"><IoHelpCircleOutline className="text-2xl"/> Help</div>
                <div className="flex gap-5 px-2 py-2 hover:bg-[#f1eeeece] rounded-lg"><MdOutlineFeedback className="text-2xl"/> Send Feedback</div>
            </div>
        </div>
    )
}

export default Sidebar;