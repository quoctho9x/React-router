/**
 * Created by quoctho.nguyen on 24/4/2017.
 */
import {ActionTypes} from '../core/constants';
//reducer nhận vào type và payload action trả về
const initialState = { counter: 0,};
//export một anonymous function Reducer sẽ nhận vào một state và action như tôi đã nói từ trước
export default function (state=initialState,action) {
    switch (action.type){
        case ActionTypes.INCREASE_COUNTER:
             //state.counter  += action.volume;
            console.log(state.counter);
            return [...state,state.counter];

        default:
            return state;
    }
}
