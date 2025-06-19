import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
        videoList: []
    },
    reducers: {
        toggleMenu: (initialState)=>{
            initialState.isMenuOpen = !initialState.isMenuOpen;
        },
        closeMenu: (initialState)=>{
            initialState.isMenuOpen = false;
        },
        getVideoList: (initialState, action) =>{
            initialState.videoList = action.payload;
        }
    }
});

export const {toggleMenu, closeMenu, getVideoList} = appSlice.actions;
export default appSlice.reducer;