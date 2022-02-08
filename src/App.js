import logo from './logo.svg';
import './App.css';
import { Day } from './Day';

function App() {
  return (

    <div className="App">
      <div className={"days"}>
      <Day dayOfWeek={"Monday"}/>
        <Day dayOfWeek={"Tuesday"}/>
        <Day dayOfWeek={"Wednesday"}/>
      </div>

    </div>
  );
}

export default App;
