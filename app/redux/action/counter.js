/**
 * Created by quoctho.nguyen on 24/4/2017.
 */
//day la nhung action, Action Creators
import {ActionTypes} from '../core/constants';
export  function increaseCounter(volume=1) {
    return { type: ActionTypes.INCREASE_COUNTER, volume };
}