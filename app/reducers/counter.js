/**
 * Created by quoctho.nguyen on 24/4/2017.
 */
import {ActionTypes} from '../core/constants';
//reducer nhận vào type và payload action trả về
const initialState = 0;//day la khoi tao ra bien gia tri ban dau la 0
//export một anonymous function Reducer sẽ nhận vào một state và action như tôi đã nói từ trước
export default function (state = 0, action) {
    switch (action.type){
        case ActionTypes.INCREASE_COUNTER:
             //state.counter  += action.volume;
            console.log(action.volume);
            console.log(state);
            return state += action.volume; //day la bien phia trong cua object lon (day la gia tri)

        default:
            return state;
    }
}
