import React, { Component } from 'react';
import HillmanCard from './components/HillmanCard';
import Wrapper from "./components/Wrapper";
import hillman from "./hillman.json";
import logo from './logo.svg';
import './App.css';


class App extends Component {

  state = {
    hillman: hillman,
    score: 0,
    topScore: 0
  }

  

  render() {
    return (
      <React.Fragment>
         <header className="App-header">  
          <h1 className="App-title">Welcome to Hillman College</h1>
         </header>
          <p className="App-intro">Click on a character only once.....</p>
        <Wrapper>
     
       {this.state.hillman.map(character => 
          <HillmanCard
            id={character.id}
            name={character.name}
            image={character.image}
            
          />
        )}
          
      
        </Wrapper>
          <footer className="footer bg-dark">
            <div className="container">
            <img src={logo} className="App-logo" alt="logo" />
              <span className="text-muted">My First React App</span>
            </div>
            </footer>
      </React.Fragment>
    );
  }
}

export default App;
