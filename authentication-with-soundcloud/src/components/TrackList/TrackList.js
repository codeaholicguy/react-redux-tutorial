import React, {Component, PropTypes} from 'react';

export default class TrackList extends Component {
  static propTypes = {
    tracks: PropTypes.array,
    user: PropTypes.object,
    auth: PropTypes.func
  }

  static defaultProps = {
    tracks: []
  }

  render() {
    return (
      <div>
        <div>
          {
            this.props.user
              ? <div>Hello {this.props.user.username}</div>
              : <button onClick={this.props.auth} type='button'>Login</button>
          }
        </div>
        <div>
          {
            this.props.tracks.map((track, key) => {
              return <div key={key}>Track: {track.title}</div>;
            })
          }
        </div>
      </div>
    )
  }
}
