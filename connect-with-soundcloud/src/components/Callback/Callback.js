import React, {Component} from 'react';

const TIME_OUT = 100

export default class Callback extends Component {

  componentDidMount() {
    setTimeout(opener.SoundCloud.connectCallback, TIME_OUT);
  }

  render() {
    return (
      <div>
        <p>This page will close soon.</p>
      </div>
    )
  }
}
