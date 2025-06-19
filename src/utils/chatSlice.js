import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./config";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers:{
        addMessage: (initialState, action) => {
            initialState.messages.unshift(action.payload); //push data in the first 
            initialState.messages.splice(LIVE_CHAT_COUNT, 1); //restrict the len to be 10 & remove 1 after 10 len is reached - To optimize live chat feature, so that page won't get freezed, u can leave pg open for any hrs
            // initialState.messages.push(action.payload);
        }
    }
});

export const{ addMessage } = chatSlice.actions; 
export default chatSlice.reducer;