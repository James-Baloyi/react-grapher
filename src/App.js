import React from 'react';
import Grapher from './Grapher.js';
import './App.css';


const data = {
  y:{
    label: 'Fav Months',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
  },
  x:{
    label: 'Ginger',
    data: [100, 78, 55, 90, 200, 60, 100, 800],
    bg_colours: ['red', 'green', 'blue', 'orange', 'purple', 'yellow', 'black', 'brown']
  }
}

class App extends React.Component{
  render(){
    return(
      <div>
      <Grapher json={data} title='Ginger v Months'/>
      </div>
    );
  }

}

export default App;