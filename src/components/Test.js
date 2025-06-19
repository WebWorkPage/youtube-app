import { useState } from "react";

const Test = () => {
    const[timer, setTimer] = useState(0);
    const controller = new AbortController(); //obj returns
    const signal = controller.signal; 

    const getData = async () => {
        const response = await fetch("http----");
        const data = await response.json();
        return data; //returns promise obj
    }

    const GetData = () => {
        fetch(`${url}?q=${searchInput.value}`, {signal}).then((response)=>{ response.json()})
        .then((data) => {console.log(data)})
        .catch((error) => console.log(error));

        // axios.get("http----").then(res => console.log(response.data));
    }

    useEffect(()=>{
        // getData().then((data)=> console.log(data));
        GetData();

        //debounce - will not make api call if diff btwn i/p (each key press) is <200ms
        const Timer = setTimeout(() => {
            GetData();
        }, 200)

        return () => {
            controller.abort(); //cancel when api call made when comp unmounts
            clearTimeout(Timer);
        }
    },[searchInput])

    const handleTimer = () => {
        setInterval(() => {
            setTimer(prevState => prevState + 1);
        },1000);
    }
    return (
        <div>
            <div>Timer {timer}</div>
            <button onClick={handleTimer}>Start</button>


            <input type="text" 
            onChange={(e) => setSearchInput(e.target.value)}
            // onFocus={}
            // onBlur={}
            />
        </div>
    )
}

export default Test;

//two pointer- target value is present via - sum of two indexes in an array
let ar=[2,6,5,8,11];
let target = 9;
const result = twoSum();
console.log(result);

function twoSum(ar, target){
    let start = 0; //1st index
    let end = ar.length -1 ; //last index
    for(let i=start;i<=end;i++){ //while(start <= high) {}
        let sum = ar[start] + ar[end];
        if(sum === target){
            return [start, end]; //index 
        }
        else if (sum > target){
            end = end - 1;
        }
        else{  //sum < target
            start = start + 1;
        }
    }
    return []; //if target sum not present in array
}

//print all leader ele in an array - brute force
function leader(arr, n){
    let leaderAll = [];
    for(let i=0; i<n; i++){
      let count = 0; //let leader = true;
      for(let j=i+1; j<n; j++){
        if(arr[j] > arr[i]){
          count++;  //leader = false;
          break;
        }
      }
      if(count === 0){  //leader === true
        leaderAll.push(arr[i]); 
      }
    }
    return leaderAll;
  }
  
  let arr= [16, 17, 4, 3, 5, 2];
  let n = arr.length;
  console.log(leader(arr,n));

  //sorting asc
  function main1(arr){
    for(let i=0;i<arr.length;i++){
      for(let j=i+1;j<arr.length;j++){
        if(arr[i] > arr[j]){
          temp=arr[i];
          arr[i]=arr[j]; 
          arr[j]=temp;
        }
      }
    }
    return arr;
  }

  //palindrome- string or number or word
  function main(input) {
    const ip = input.toString();
    let result="";
    for(let i=ip.length-1; i>=0; i--){
      result = result + ip[i];
    }
    return (result === ip) ? "yes" : "no";
  }
  
  let input=12321; //input="racecar"
  console.log(main(input));

  //group people based on age
  function main(input) {
    let peopleArr = [
      {name: 'A', age:10},
      {name: 'B', age:17},
      {name: 'C', age:14},
      {name: 'D', age:10}
    ]
  
    let resultObj={};
    for(let i=0;i<peopleArr.length;i++){
      if(resultObj[peopleArr[i].age]){
        resultObj[peopleArr[i].age].push(peopleArr[i].name);
      }
      else{
        resultObj[peopleArr[i].age] = [peopleArr[i].name];
      }
    }
    return resultObj;
  }