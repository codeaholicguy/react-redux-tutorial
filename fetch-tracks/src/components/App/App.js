import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>{this.props.children}</div>
      </MuiThemeProvider>
    )
  }
}
