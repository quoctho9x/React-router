/**
 * Created by quoctho.nguyen on 20/4/2017.
 */
//day la nhung action, Action Creators
import {Actiontype} from '../action/tracks';

//Action creator đầu tiên của chúng ta sẽ nhận vào input là list tracks, cái mà chúng ta sẽ set vào global state.
// Action creator này sẽ trả về một object chứa action type và payload là list mà chúng ta đã truyền vào.
export function setTracks(tracks) {
    return{
        type:Actiontype.TRACKS_SET,
        tracks
    }
}
