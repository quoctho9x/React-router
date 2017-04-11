/**
 * Created by quoctho.nguyen on 11/4/2017.
 */
class FormAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {obj: {}}
    }

    send() {
        var last_child = list.state.cars[list.state.cars.length - 1];
        var objnew = {};
        if (this.refs.media.value) {
            objnew.id = last_child.id + 1;
            objnew.media = this.refs.media.value;
            objnew.name = (this.refs.name.value.length > 0) ? this.refs.name.value : 'no name';
            objnew.year = '';
            objnew.model = '';
            objnew.make = '';
            objnew.price = '';
            list.state.cars.push(objnew);
            list.setState(list.state.cars);

            ReactDOM.unmountComponentAtNode(document.getElementById('addnode'))
        }
        else {
            alert('xin nhap media');
            return false
        }
    }

    render() {
        return (
            <div>
                <form>
                    media: <input type="text" ref="media" placeholder="media"/><br/>
                    Name: <input type="text" ref="name" placeholder="name"/><br/>
                    {/* Year: <input type="text" placeholder="year"/><br/>
                     Model: <input type="text" placeholder="model"/><br/>
                     Make: <input type="text" placeholder="make"/><br/>
                     Price: <input type="text" placeholder="price"/><br/>*/}
                    <input type="button" value="Submit" onClick={this.send.bind(this)}/>
                </form>
            </div>
        )
    }
}