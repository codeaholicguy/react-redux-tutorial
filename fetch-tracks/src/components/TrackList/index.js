import {connect} from 'react-redux';
import TrackList from './TrackList';
import {CLIENT_ID} from '../../config';
import {auth, play} from '../../actions';

export default connect(({tracks, auth}) => ({tracks, user: auth.user, clientId: CLIENT_ID}), {auth, play})(TrackList);
