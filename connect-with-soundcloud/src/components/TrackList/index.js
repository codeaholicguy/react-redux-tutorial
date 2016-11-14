import {connect} from 'react-redux';
import TrackList from './TrackList';

export default connect(({tracks}) => ({tracks}))(TrackList);
