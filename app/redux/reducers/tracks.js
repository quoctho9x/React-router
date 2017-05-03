/**
 * Created by quoctho.nguyen on 20/4/2017.
 */
import {ActionTypes} from '../core/constants';
import ReactDOM from 'react-dom';
import Popup from '../../component/tracklist.component/popup'
//reducer nhận vào type và payload action trả về
const initialState = [];
//export một anonymous function Reducer sẽ nhận vào một state và action như tôi đã nói từ trước
export default function (state=initialState,action) {
    switch (action.type){
        case ActionTypes.TRACKS_SET:
            return setTracks(state,action);
        case ActionTypes.ADD_LIST:
            if(action.text.trim() !== '')
            {
                return [{
                    id: (state.length === 0) ? 0 : state[0].id + 1,
                    title: action.text,
                    content: action.text
                }, ...state];
            }
            else {
                alert('input is not null');
                return [...state];
            }
        case ActionTypes.DELETE_ID:
           return state.filter((todo) => todo.id !== action.id);
        case ActionTypes.EDIT_ID:
           // ReactDOM.render(<Popup type={'edit'} />, document.getElementById('popup'));
            let objnew = {};
           console.log(action.object);
            for (let i = 0; i < state.length; i++) {
                if (state[i].id == action.object.id) {
                    objnew.id = action.object.id;
                    objnew.title = action.object.title;
                    objnew.content =  action.object.content;
                    state.splice(i, 1, objnew);  //removes 1 element at position i
                    //console.log(state);
                    break;
                }
            }
            return [...state];

        default:
            return state;
    }
}

function setTracks(state, action) {
    const {tracks} = action;
    return [...tracks];
   // return [...state, ...tracks];
}