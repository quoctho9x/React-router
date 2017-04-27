/**
 * Created by quoctho.nguyen on 20/4/2017.
 */
//day la nhung action, Action Creators
import {ActionTypes} from '../core/constants';

//Action creator đầu tiên của chúng ta sẽ nhận vào input là list tracks, cái mà chúng ta sẽ set vào global state.
// Action creator này sẽ trả về một object chứa action type và payload là list mà chúng ta đã truyền vào.
export function setTracks(tracks) {
    return{
        type:ActionTypes.TRACKS_SET,
        tracks
    }
}
export function addList(text) {
    return{
        type:ActionTypes.ADD_LIST,text
    }
    
}
export function deleteId(id) {
    return{
        type:ActionTypes.DELETE_ID,id
    }

}
export function editID(id) {
    return{
        type:ActionTypes.EDIT_ID,id
    }

}
export function getItem(item) {
    return{
        type:ActionTypes.GET_ITEM,item
    }

}

