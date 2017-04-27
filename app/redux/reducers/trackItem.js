/**
 * Created by quoctho.nguyen on 20/4/2017.
 */
import {ActionTypes} from '../core/constants';
import ReactDOM from 'react-dom';
import Popup from '../../component/tracklist.component/popup'
//reducer nhận vào type và payload action trả về
const initialState = {};
//export một anonymous function Reducer sẽ nhận vào một state và action như tôi đã nói từ trước
export default function (state=initialState,action) {
    switch (action.type){
        case ActionTypes.GET_ITEM:
            state = action.item;
           return state;
        default:
            return state;
    }
}
