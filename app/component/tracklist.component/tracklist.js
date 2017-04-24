/**
 * Created by quoctho.nguyen on 21/4/2017.
 */
import React, {Component, PropTypes} from 'react';
/*Nó sẽ nhận kết quả trả về của function connect là một function, function đó sẽ nhận vào tham số là component TrackList.
 Sau đó đem tất cả trả về cho component cha, component cha sẽ có thể truy xuất store, trong khi TrackList sẽ chỉ là component hiển thị dữ liệu.
 Thêm vào đó, function connect sẽ nhận vào tham số là một function làm nhiều vụ mapping global state vào props của component,
 chúng ta gọi nó là mapStateToProps, function này sẽ có nhiệm vụ trả về object, là substate của global state, cái mà component cần.

 Chúng ta vẫn có thể access props được truyền vào từ component cha thông qua function mapStateToProps

 Ngoài ra nếu bạn có dùng decorator trong ES6, component có thể được khai báo gọn hơn bằng cách.
 @connect(({tracks}) => ({tracks}), {})
 export default class TrackList extends Component {}
 */

export default class TrackList extends Component {
     render() {
        return (
            <div>
                {
                    this.props.tracks.map((track, key) => {
                        return <div key={key}>Track: {track.title}</div>;
                    })
                }
            </div>
        )
    }
}
