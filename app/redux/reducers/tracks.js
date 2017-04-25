/**
 * Created by quoctho.nguyen on 20/4/2017.
 */
import {ActionTypes} from '../core/constants';
//reducer nhận vào type và payload action trả về
const initialState = [];
//export một anonymous function Reducer sẽ nhận vào một state và action như tôi đã nói từ trước
export default function (state=initialState,action) {
    switch (action.type){
        case ActionTypes.TRACKS_SET:
            return setTracks(state,action);


        default:
            return state;
    }
}

function setTracks(state, action) {
    const {tracks} = action;
    return [...tracks];
   // return [...state, ...tracks];
}