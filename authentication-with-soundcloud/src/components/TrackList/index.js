import {connect} from 'react-redux';
import TrackList from './TrackList';
import {auth} from '../../actions';

export default connect(({tracks, auth}) => ({tracks, user: auth.user}), {auth})(TrackList);
