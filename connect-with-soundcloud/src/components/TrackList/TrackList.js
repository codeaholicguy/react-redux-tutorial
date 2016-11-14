import React, {Component, PropTypes} from 'react';

export default class TrackList extends Component {
  static propTypes = {
    tracks: PropTypes.array
  }

  static defaultProps = {
    tracks: []
  }

  render() {
    return (
      <div>
      {
        this.props.tracks.map((track, key) => {
          return <div key={key}>Track: {track.title}</div>;
        })
      }
      </div>
    )
  }
}
