/**
 * Created by quoctho.nguyen on 26/4/2017.
 */
import {connect} from 'react-redux';
import Counter from './counter';

export default connect(({counter})=>({counter}))(Counter);
