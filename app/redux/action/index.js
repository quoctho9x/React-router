/**
 * Created by quoctho.nguyen on 20/4/2017.
 */
//tạo một file index.js trong folder actions để chứa tất cả các action creator
import {setTracks,addList,deleteId,editID} from './tracks';
import {increaseCounter} from './counter';

/*Trong file này chúng ta sẽ bundle tất cả các action creator mà chúng ta có và export chúng ra như là một public interface cho các phần còn lại sử dụng.*/
export {
    setTracks, addList, deleteId, editID, increaseCounter
};


