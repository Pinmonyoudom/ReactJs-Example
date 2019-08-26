// from Original Package

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React 2019 Here sss
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;


// import React  from 'react';
// import './App.css'

// function App (){
//   return (
//     <div className="App">
//     <h1 style={{color:"red"}}>47</h1>
//     </div>
//     );
// }

// export default App;





// from W3Schools

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello World!</h1>
//       </div>
//     );
//   }
// }

// export default App;

// write hello world in react
import React, { Component } from 'react';
import './App.css';
import Persons from './People/Person';

class App extends Component {
  state = {
    Info : [
      {name: 'A', age: 19},
      {name: 'B', age: 29},
      {name: 'C', age: 39}
    ],
    otherStatef: 'Others value'
  }

  switchNameHandler = (newS) =>{
    // console.log('Clicked!');
    //KHOS TE: this.state.Info[0].name="MAX";
    this.setState( {
      Info: [
      {name: newS, age:29},
      {name: 'BigCat', age:49},
      {name: 'CCX', age:39}

    ]
  } )
  }

  nameChangeHandler = (event) => {
    this.setState( {
      Info: [

      {name: "DOMx", age:39},
      {name: 'BigCat', age:29},
      {name: event.target.value, age:19}

      ]
  } )
  }



  render() {
    //inline style
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid brown',
      padding: '15px',
      cursor: 'pointer',
      color: 'white'
    };

    return (
      // <div className="App">

      //   <h1>Welcome</h1>
      //   <p>to 007</p>

      //   <button> Switch Alert </button>      

      //   <Persons name="A" age="19" > Adult </Persons>
      //   <Persons name="B" age="29" > CG </Persons>
      //   <Persons name="C" age="39" > OLD SCHOOL </Persons> 

      // </div>
      // its use without state but use state, nv krom

      <div className="App">
        <h1>Welcome</h1>
        <p>to 007</p>

      {/* <button onClick={this.switchNameHandler.bind(this,"MAXIMUM")}> Switch NAME </button>       */}
      <button 
      style={style}
      
      onClick={() => this.switchNameHandler("KINGs") }> Switch NAME </button>      

      <Persons name={this.state.Info[0].name} age={this.state.Info[0].age}/>
      <Persons name={this.state.Info[1].name} age={this.state.Info[1].age}/> 
      <Persons name={this.state.Info[2].name} age={this.state.Info[2].age} 
      click={this.switchNameHandler.bind(this,"MAXX!")}
      changed={this.nameChangeHandler} > OLD SCHOOL </Persons>
       
      </div>
    );
    //This is JSX CODE

    // return React.createElement('div',{className: 'App'} , 
    // React.createElement('h1',null,'Hello World!!!'));
    // khang krom nis smer ah ler 
  }
}

export default App;