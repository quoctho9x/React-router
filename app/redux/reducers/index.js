/**
 * Created by quoctho.nguyen on 20/4/2017.
 */
import {combineReducers} from 'redux';
import tracks from './tracks';
import counter from './counter';
import item from './trackItem';

/*Thông thường bạn sẽ phải export từng reducer, reducer đó sẽ phải trả về toàn bộ state của application.
Khi sử dụng combineReducers, bạn có thể sử dụng multiple reducer mỗi reducer sẽ trả về một substate.
Nếu không sử dụng nó bạn sẽ phải access list tracks trong global state như thế này.*/
export default combineReducers({
    //doi track thanh tracks
    //day la object lon phia ben ngoai console.
    listtracks:tracks, counter:counter, item:item
});