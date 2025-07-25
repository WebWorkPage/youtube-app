import { useState, useMemo, useEffect } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () =>{
    const[text, setText] = useState(0);
    const[isDarkTheme, setIsDarkTheme] = useState(false);

    // const prime = findNthPrime(text); - before memoization 
    const prime = useMemo(()=>findNthPrime(text), [text]); //returns a memoized value of heavy operation(ie finding nthPrime) until the text state changes

    return(
      <>
        {/* <div className={"w-96 h-96 border border-black p-2 m-4 " + (isDarkTheme && "bg-gray-900 text-white")}>
          <button className="m-2 p-2 bg-green-500" onClick={()=>setIsDarkTheme(!isDarkTheme)}>Toggle</button>
          <div>
            <input type="number" value={text} onChange={(e)=>setText(e.target.value)} className="w-72 px-2 border border-black"/>
          </div>
          <div>
            <h1>nth prime: {prime}</h1>
          </div>
        </div> */}
{/* 
        <div className="border border-black border-solid text-center w-52 h-64 bg-black">
            <div className="border border-solid border-white rounded-full w-24 h-24 mt-4 ml-14"/>
            <h1 className="mt-3 text-lg font-bold text-white">Name</h1>
            <p className="text-white">Bio</p>
            <button className="border border-blue-800 p-1 pl-3 pr-3 mt-4 bg-blue-700">Message</button>
        </div> */}

        {/* <div>
        <div><label
  class="has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900 ..."
>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M105.7 215v41.3h57.1a49.7 49.7 0 0 1 -21.1 32.6c-9.5 6.6-21.7 10.3-36 10.3-27.6 0-50.9-18.9-59.3-44.2a65.6 65.6 0 0 1 0-41l0 0c8.4-25.5 31.7-44.4 59.3-44.4a56.4 56.4 0 0 1 40.5 16.1L176.5 155a101.2 101.2 0 0 0 -70.8-27.8 105.6 105.6 0 0 0 -94.4 59.1 107.6 107.6 0 0 0 0 96.2v.2a105.4 105.4 0 0 0 94.4 59c28.5 0 52.6-9.5 70-25.9 20-18.6 31.4-46.2 31.4-78.9A133.8 133.8 0 0 0 205.4 215zm389.4-4c-10.1-9.4-23.9-14.1-41.4-14.1-22.5 0-39.3 8.3-50.5 24.9l20.9 13.3q11.5-17 31.3-17a34.1 34.1 0 0 1 22.8 8.8A28.1 28.1 0 0 1 487.8 248v5.5c-9.1-5.1-20.6-7.8-34.6-7.8-16.4 0-29.7 3.9-39.5 11.8s-14.8 18.3-14.8 31.6a39.7 39.7 0 0 0 13.9 31.3c9.3 8.3 21 12.5 34.8 12.5 16.3 0 29.2-7.3 39-21.9h1v17.7h22.6V250C510.3 233.5 505.3 220.3 495.1 211zM475.9 300.3a37.3 37.3 0 0 1 -26.6 11.2A28.6 28.6 0 0 1 431 305.2a19.4 19.4 0 0 1 -7.8-15.6c0-7 3.2-12.8 9.5-17.4s14.5-7 24.1-7C470 265 480.3 268 487.6 273.9 487.6 284.1 483.7 292.9 475.9 300.3zm-93.7-142A55.7 55.7 0 0 0 341.7 142H279.1V328.7H302.7V253.1h39c16 0 29.5-5.4 40.5-15.9 .9-.9 1.8-1.8 2.7-2.7A54.5 54.5 0 0 0 382.3 158.3zm-16.6 62.2a30.7 30.7 0 0 1 -23.3 9.7H302.7V165h39.6a32 32 0 0 1 22.6 9.2A33.2 33.2 0 0 1 365.7 220.5zM614.3 201 577.8 292.7h-.5L539.9 201H514.2L566 320.6l-29.4 64.3H561L640 201z"/></svg>
  Google Pay
  <input type="radio" class="checked:border-indigo-500 ..." />
</label></div>
<div><label
  class="has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900 ..."
>
  Apple Pay
  <input type="radio" class="checked:border-indigo-500 ..." />
</label></div>
<div><label
  class="has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900 ..."
>
  Credit card
  <input type="radio" class="checked:border-indigo-500 ..." />
</label></div> */}

        {/* </div> */}

        <div className="shadow-md">
          <div className="flex  hover:bg-gray-200 px-6 py-3">
            <div className="border rounded-full bg-gray-400 w-11 h-11">   
              <svg xmlns="http://www.w3.org/2000/svg" className="w-11 h-9 mt-2 ml-1" viewBox="0 0 608 650"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
            </div>
            <div className="ml-4">
              <h1 className="font-bold">Name</h1>
              <p>Bio</p>
            </div>
            <div>
              <button className="pl-5 pr-5 hover:bg-indigo-300 rounded-2xl ml-24">Call</button>
            </div>
          </div>

          <div className="flex  hover:bg-gray-200 px-6 py-3">
            <div className="border rounded-full bg-gray-400 w-11 h-11">   
              <svg xmlns="http://www.w3.org/2000/svg" className="w-11 h-9 mt-2 ml-1" viewBox="0 0 608 650"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
            </div>
            <div className="ml-4">
              <h1 className="font-bold">Name</h1>
              <p>Bio</p>
            </div>
            <div>
              <button className="pl-5 pr-5 hover:bg-indigo-300 rounded-2xl ml-24">Call</button>
            </div>
          </div>

          <div className="flex hover:bg-gray-200 px-6 py-3">
            <div className="border rounded-full bg-gray-400 w-11 h-11">   
              <svg xmlns="http://www.w3.org/2000/svg" className="w-11 h-9 mt-2 ml-1" viewBox="0 0 608 650"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
            </div>
            <div className="ml-4">
              <h1 className="font-bold">Name</h1>
              <p>Bio</p>
            </div>
            <div>
              <button className="pl-5 pr-5 hover:bg-indigo-300 rounded-2xl ml-24">Call</button>
            </div>
          </div>
        </div>
        
        <label for="mail">Email</label>
        <input type="email" name="mail" className="focus:border border-s-blue-300 border border-s-gray-200"/>

        <form>
          <label class="block">
            <span class="...">Email</span>
            <input type="email" class="peer ..." />
            <p class="invisible peer-invalid:visible ...">Please provide a valid email address.</p>
          </label>
        </form>

      </>
    )
}

export default Demo;

/*
useMemo - used to optimize ur app performance, give better User experience
        - lets you memoize the result of calculation until dependency changes | lets u cache the result of cal btwn re-renders

Syntax: useMemo(calculatedValue, dependencies); 
        calculatedValue - heavy operation/calculation fn that returns a output
        dependency - state value -> Memoization/cache result will not happen when dependency value changes

u can optimize ur app performance in other ways also without useMemo() hook  ->
   create a separate comp with local state for (Toggle DarkTheme) -- try it
   using useEffect, useState also -- try it
Search diff btwn useMemo() and useEffect()
*/