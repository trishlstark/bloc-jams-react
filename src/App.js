import React, { Component } from 'react';
import { Route,Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div id="navigation-container">
          <img src={'/assets/images/bloc_jams_logo.png'} id="logo"/>
          <nav>
            <Link to='/'>Landing</Link>
            <Link to='/library'>Library</Link>
          </nav>
        </div>



        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>

      </div>
    );
  }
}

export default App;
