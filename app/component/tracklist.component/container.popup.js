/**
 * Created by quoctho.nguyen on 21/4/2017.
 */
import {connect} from 'react-redux';
import TrackList from './tracklist';
import Popup from './popup';
export default connect(({listtracks, item}) => ({listtracks, item}))(Popup);
