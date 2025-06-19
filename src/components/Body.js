import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import WatchPage from "./WatchPage";

const Body = () => {
    return(
        <div className="flex">
            <Sidebar />
            <Outlet/> {/*<MainContainer /> or <WatchPage/> will load here acc to route/path*/}
        </div>
    )
}

export default Body;


/**
 * Before Routing & Before adding <WatchPage/>, <Body/> comp ->
 * <div>
 *     <SideBar/>
 *     <MainContainer />
 * </div>
 */