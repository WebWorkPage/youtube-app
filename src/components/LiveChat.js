import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomString } from "../utils/helper";

const Livechat = () => {
    const[liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages)

    useEffect(()=>{
        //api polling done by setInterval()
        const i = setInterval(()=>{ 
            //API polling -make fetch call to get live chat 
            console.log("API Polling");

            //dispatch an action with API data to Redux store 
            dispatch( addMessage({
                name: generateRandomNames(),
                message: makeRandomString(20) + " 🎉"
              })
            );
        },1500);

        return () => clearInterval(i);  
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();  //to prevent page from refresh
        dispatch(addMessage({
            name: "AlphaX",
            message: liveMessage
        }));
        setLiveMessage("");
    }

    return(
        <>
            <div className="h-[500px] w-full ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
            {
                chatMessages.map((c,index) => <ChatMessage key={index} name={c.name} message={c.message}/> )
            } 
            </div>
            <form className="w-full ml-2 p-2 border border-black" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" 
                 className="w-[411px] px-2" 
                 value={liveMessage} 
                 onChange={ (e) => setLiveMessage(e.target.value) }
                />
                <button className="mx-2 px-3 bg-green-100">Send</button>
            </form>
        </>
    )
}

export default Livechat;