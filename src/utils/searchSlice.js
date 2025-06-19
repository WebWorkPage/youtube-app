import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{},  //to store the search result of api call - can restrict the cache state to store only 100 keys, In scenarios where more api results are stored (ie to not bloat state value in Redux store) - how restrict? - As soon as length reached to 100 in state, start removing api result from top in state 
    reducers:{
        cacheResults:(initialState, action)=>{
            // initialState = {...action.payload, ...initialState};
            initialState = Object.assign(initialState, action.payload);
            /**
             * searchCache = {
             *    "ip" : ["iphone 11", "iphone pro max"], - action.payload
             * }
             * 
             * searchCache = {
             *    "ip" : ["iphone 12", "iphone pro max 11"], - initialState
             *    "iph" : ["", "", "", "", ""]  - action.payload
             * }
             * 
             * searchCache = {
             *    "ip" : ["iphone 11", "iphone pro max"], - initialState
             *    "iph" : ["", "", "", "", ""], - initialState
             *    "iphon" : ["", "", "", "", ""]  - action.payload
             * }
             */

        }
    }
})

export const{cacheResults} = searchSlice.actions;
export default searchSlice.reducer;


/**
 * store search result of api call in redux store- for caching
 * format - { searchQuery : response from api call}
 * 
 * Cache:
 * time complexity to search in array = O(n)
 *   Linear search - iterate through for loop nd search for each ele  
 * time complexity to search in Object (ie in Software Engineer, hashmap) = O(1)
 *   search key in obj - O(1) - Far better optimized way than array
 * 
 * even more optimized way than searching in object is - new Map() class;
 * 
 * 
 * 
 */