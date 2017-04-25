/**
 * Created by quoctho.nguyen on 21/4/2017.
 */
import {connect} from 'react-redux';
import TrackList from './tracklist';
export default connect(({listtracks}) => ({listtracks}))(TrackList);