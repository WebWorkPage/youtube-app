import React, { useRef, useState, useEffect } from 'react'

const Demo2 = () => {

    const[y, setY] = useState(10);  //state var
    let x = 10;  //normal var
    const z = useRef(0);  //Ref var
    console.log("ref var ",z);
    const i=useRef(null);

    useEffect(()=>{
      i.current=setInterval(()=>{
        console.log("namastae react");
      },500);

      return () => { clearInterval(i.current); } //when comp unmounts, this callback fn will be called
    },[])

  return (
    <div className="w-96 h-96 border border-black p-2 m-4">
        <button className="m-2 p-2 bg-green-500" 
          onClick={()=> {
            x=x+1; //x var increases but the updated value is not shown in UI bcos comp doesn't re-rendern since its a normal var
            console.log(x);
          }}
        >
        Increase X</button>
        <span>Let = {x}</span>
        <button className="m-2 p-2 bg-green-500" onClick={() => setY(y+1)}>Increase Y</button>
        <span>State = {y}</span>
        <button className="m-2 p-2 bg-green-500" onClick={() => { z.current = z.current + 1;
          console.log("ref z ",z);
         }}>Increase Ref</button>
        <span>State = {z.current}</span>
        <button className="m-2 p-2 bg-red-500" onClick={()=>{clearInterval(i.current)}}>Stop Printing</button>
    </div>
  )
}

export default Demo2;

// function test(num){
//   const pr =  new Promise((resolve, reject)=>{
//       if(num % 2 === 0){
//         resolve(`${num} is an Even number`);
//       }
//       else{
//         reject("failed");
//       }
//   })
//   return pr;
// }
// test(5).then((data) => { console.log(data)}).catch((err) => {console.log(err)})

// async function test(num){
//     return new Promise((resolve, reject)=>{
//       if(num % 2 === 0){
//         setTimeout(()=>resolve("even num"), 3000);
//       }
//       else{
//         reject("failed");
//       }
//     });
// }
// const data = await test(5);
// console.log(data);

function job(data) {
  const pr = new Promise((resolve, reject) => {
      if(typeof data === "number"){
          if(data%2 != 0){ //odd
              setTimeout(()=>resolve("odd"),1000);
          }
          else{
              setTimeout(()=>reject("even"),2000);
          }
      }
      else{
          reject("error");
      }
  })
  return pr;
}
job(2).then((data)=>console.log(data)).catch((error)=>console.log(error))