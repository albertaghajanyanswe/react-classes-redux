import React from 'react';
import { connect } from 'react-redux';

class Playlist extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        inputValue: ""
    }
    this.addPlaylist = this.addPlaylist.bind(this);
    this.deletePlaylist = this.deletePlaylist.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(event) {
    this.setState({
        inputValue: event.target.value
    });
  }

  addPlaylist() {
    this.props.onAddPlaylist(this.state.inputValue);
  }

  deletePlaylist(playlist) {
    this.props.onDeletePlaylist(playlist);
  }

  render() {
    return (
      <div>
          <input onChange={this.handleInputChange} type="text" />
          <button onClick={this.addPlaylist}> Add Playlist </button>

          <ul>
            {this.props.playlists.map((currPlaylist, index) =>
                <div key={index}>
                    <li key={index}>{currPlaylist}</li>
                    <button onClick={() => this.deletePlaylist(currPlaylist)}> Delete Playlist </button>
                </div>
            )}
          </ul>
      </div>
    );
  }

}

export default connect(
  state => ({
    playlists: state.playlists
  }),
  dispatch => ({
    onAddPlaylist: (playlistName) => {
      dispatch({type: 'ADD_PLAYLIST', payload: playlistName})
    },
    onDeletePlaylist: (playlistName) => {
      dispatch({type: 'DELETE_PLAYLIST', payload: playlistName})
    }
  })
)(Playlist);
