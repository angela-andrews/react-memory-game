import React, { Component } from 'react';
import HillmanCard from './components/HillmanCard';
import Wrapper from "./components/Wrapper";
import hillman from "./hillman.json"
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
         <header className="App-header">
          
          <h1 className="App-title">Welcome to Hillman College</h1>
        </header>
        <p className="App-intro">
         Click on a character only once.....</p>
      <Wrapper>
             
        
        
        {
          hillman.map(character =>
            <HillmanCard image={character.image}
            />
            )
        }
        
    
      
      </Wrapper>
      <footer className="footer bg-dark">
        <div class="container">
        <img src={logo} className="App-logo" alt="logo" />
          <span class="text-muted">My First React App</span>
        </div>

        </footer>
      </React.Fragment>
    );
  }
}

export default App;
