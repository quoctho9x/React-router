/**
 * Created by quoctho.nguyen on 21/4/2017.
 */
import React, {Component, PropTypes} from 'react';
import {configureStore} from '../../store';// add them
import * as actions from '../../redux/action';// add them
import {Provider} from 'react-redux';// add them
/*Nó sẽ nhận kết quả trả về của function connect là một function, function đó sẽ nhận vào tham số là component TrackList.
 Sau đó đem tất cả trả về cho component cha, component cha sẽ có thể truy xuất store, trong khi TrackList sẽ chỉ là component hiển thị dữ liệu.
 Thêm vào đó, function connect sẽ nhận vào tham số là một function làm nhiều vụ mapping global state vào props của component,
 chúng ta gọi nó là mapStateToProps, function này sẽ có nhiệm vụ trả về object, là substate của global state, cái mà component cần.

 Chúng ta vẫn có thể access props được truyền vào từ component cha thông qua function mapStateToProps

 Ngoài ra nếu bạn có dùng decorator trong ES6, component có thể được khai báo gọn hơn bằng cách.
 @connect(({tracks}) => ({tracks}), {})
 export default class TrackList extends Component {}
 */
// const store = configureStore();// add them



export default class TrackList extends Component {
     render() {
        return (

            <div>
                <div>
                <table className="table table--custom">
                    <thead>
                    <tr className="table--th--custom">
                        <th>List</th>
                        <th>Button</th>
                    </tr>
                    </thead>
                    <tbody>
                {//this.props.listtracks props nay duoc lay tu listtracks tu fn connect trong index tracklist.component. va traclist nay duoc lay tu  tracklist index cua reducers
                     this.props.listtracks.map((track, key) => {
                        return <tr className="table--tr--custom" key={key}>
                            <td>{track.title}</td>
                                    <td> <input type="button" className="btn btn-danger" value="Delete" onClick={() => { this.props.dispatch(actions.deleteId(track.id));}}/></td>
                               </tr>;})
                }
                </tbody>
                </table>
                </div>
            </div>

        )
    }
}
