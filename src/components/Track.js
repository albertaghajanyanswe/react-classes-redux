import React from 'react';
import { connect } from 'react-redux';

class Track extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        inputValue: ""
    }
    this.addTrack = this.addTrack.bind(this);
    this.deleteTrack = this.deleteTrack.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(event) {
    this.setState({
        inputValue: event.target.value
    });
  }

  addTrack() {
    this.props.onAddTrack(this.state.inputValue);
  }

  deleteTrack(track) {
    this.props.onDeleteTrack(track);
  }

  render() {
    return (
      <div>
          <input onChange={this.handleInputChange} type="text" />
          <button onClick={this.addTrack}> Add Track </button>

          <ul>
            {this.props.tracks.map((track, index) =>
                <div key={index}>
                    <li key={index}>{track}</li>
                    <button onClick={() => this.deleteTrack(track)}> Delete Track </button>
                </div>
            )}
          </ul>
      </div>
    );
  }

}

export default connect(
  state => ({
    tracks: state.tracks
  }),
  dispatch => ({
    onAddTrack: (trackName) => {
      dispatch({type: 'ADD_TRACK', payload: trackName})
    },
    onDeleteTrack: (trackName) => {
      dispatch({type: 'DELETE_TRACK', payload: trackName})
    }
  })
)(Track);
