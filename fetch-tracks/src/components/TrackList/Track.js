import React, {PropTypes, Component} from 'react';

export default class Track extends Component {
  static propTypes = {
    track: PropTypes.object.isRequired,
    play: PropTypes.func.isRequired
  }

  _play() {
    this.props.play(this.props.track);
  }

  render() {
    const {origin: {artwork_url, title}} = this.props.track
    return (
      <div className='track'>
        <img src={artwork_url} />
        {title}
        <button onClick={() => this._play()} type='button'>Play</button>
      </div>
    )
  }
}
