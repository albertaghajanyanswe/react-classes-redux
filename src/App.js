import React from 'react';
import logo from './logo.svg';
import './App.css';
import Track from './components/Track';
import Playlist from './components/Playlist';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };

  }

  render() {
    return (
      <div>
          <Track />
          <Playlist />
      </div>
    );
  }

}

export default App;
