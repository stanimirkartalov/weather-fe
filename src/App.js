import logo from './logo.svg';
import './App.css';
import { Day } from './Day';
import { useEffect, useState} from 'react';
import { callService } from "./utils/callService.js"

function App() {
const [days, setDays] = useState([]);

useEffect(async ()=>{
const response = await callService("get", "https://localhost:5001/api/weatherforecast/forecast");
console.log(response)

setDays(response)
},[]);

const timestampMap = {
0: "Today",
1: "Tomorrow",
2: "Day After"
}

  return (

    <div className="App">
      <div className={"days"}>
      {(days??[]).map((day, index)=>{
      return <Day {...day} first={index == 0} timestamp={timestampMap[index] ?? ''}/>

      })}

      </div>

    </div>
  );
}

export default App;
