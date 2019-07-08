import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { allStarships } from './services/sw-api';
import './App.css';
import StarshipPage from './pages/StarshipPage';

class App extends Component {
  
  state = {
    starships: []
  };

  getStarship = (idx) => {
    return this.state.starships[idx];
  }

  async componentDidMount() {
    const starships = await allStarships();
    this.setState({ starships: starships.results });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">Star Wars Starships</header>
        <Switch>
          <Route exact path='/' render={() => 
            <section>
              {this.state.starships.map((starship, idx) => 
                <Link
                  to={`/starships/${idx}`}
                  key={starship.name}
                >
                  {starship.name}
                </Link>
              )}
            </section>
          }/>
          <Route path='/starships/:idx' render={(props) => 
            <StarshipPage
              {...props}
              getStarship={this.getStarship}
            />
          }/>
        </Switch>
      </div>
    );
  }

}

export default App;