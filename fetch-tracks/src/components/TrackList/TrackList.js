import React, {Component, PropTypes} from 'react';
import Track from './Track';

export default class TrackList extends Component {
  static propTypes = {
    tracks: PropTypes.object,
    user: PropTypes.object,
    clientId: PropTypes.string,
    auth: PropTypes.func,
    play: PropTypes.func
  }

  static defaultProps = {
    tracks: []
  }

  componentDidUpdate() {
    const player = this.player;
    if (player) {
      if (this.props.tracks.activeTrack) {
        player.play();
      } else {
        player.pause();
      }
    }
  }

  render() {
    const {tracks: {activeTrack, tracks}} = this.props;

    return (
      <div>
        <div>
          {
            this.props.user
              ? <div>Hello {this.props.user.full_name}</div>
              : <button onClick={this.props.auth} type='button'>Login</button>
          }
        </div>
        <div>
          {
            tracks.map((track, key) => {
              return (
                <Track key={key} track={track} play={this.props.play} />
              )
            })
          }
        </div>
        <div>
          {activeTrack && (
            <audio
              id='player'
              ref={(player) => {this.player = player;}}
              src={`${activeTrack.origin.stream_url}?client_id=${clientId}`}>
            </audio>
          )}
        </div>
      </div>
    )
  }
}
