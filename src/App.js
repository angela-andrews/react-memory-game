import React, { Component } from 'react';
import HillmanCard from './components/HillmanCard';
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import hillman from "./hillman.json";
import './App.css';

//
function shuffle(array) {
  for(let i = array.length -1; i > 0; i--) {
    let x = Math.floor(Math.random() * (i + 1));
    [array[i], array[x]] = [array[x] , array[i]];
  }
  return array;
}

class App extends Component {

  state = {
    characters: hillman,
    score: 0,
    topScore: 0,
    clicked: []
    
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id)=== -1){
      this.handleAddScore();
      this.setState( {clicked : this.state.clicked.concat(id) });
    }
    else {
      this.handleReset();
    }
  };

  handleAddScore = () => {
    const newScore = this.state.score + 1;
    this.setState ({ score: newScore});
    if (newScore >= this.state.topScore){
      this.setState( { topScore: newScore})
    }
    else if (newScore === 10){
      alert(`You Win!!!!! Score: ${newScore}`)
    }
    this.handleShuffleCards();
    
  };

  handleReset = () => {
    this.setState({ 
      score: 0,
      topScore: this.state.topScore,
      clicked: []
    });
    this.handleShuffleCards()
  };

  handleShuffleCards = () => {
    let shuffleCharacters = shuffle(hillman);
    this.setState ( { character : shuffleCharacters });
  };

  

  render() {
    return (
      <React.Fragment>
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
          brand="A Different World"
         />
        <Header
          title="Welcome to Hillman College"
          brand="A Different World"
         

         />
        <Wrapper>
     
       {this.state.characters.map(character => 
          <HillmanCard
            handleClick={this.handleClick}
            handleAddScore={this.handleAddScore}
            handleShuffleCards={this.handleShuffleCards}
            handleReset={this.handleReset}
            id={character.id}
            key={character.key}
            name={character.name}
            image={character.image}
            
          />
        )}
          
      
        </Wrapper>
          <Footer />
      </React.Fragment>
    );
  }
}

export default App;
