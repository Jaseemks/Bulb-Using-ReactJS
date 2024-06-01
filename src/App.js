import React from "react";
import onImage from './on.png';
import offImage from './off.png';
import './App.css';


function App() {
let [state, setState] = React.useState({on:false});
return(
  <div className='App'>
    <div className="container">
      <img src={state.on ? onImage : offImage} alt='bulb image'/>
    </div>
    
    <button onClick={()=>setState({on : !state.on})}
    style={{backgroundColor : state.on?'red' : 'green'}}
    >
      {state.on ? 'Turn Off' : 'Turn On'}
    </button>
    

  </div>

);
}


export default App;
