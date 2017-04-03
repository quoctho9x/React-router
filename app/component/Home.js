import React, {Component} from 'react'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {bien:'quoc tho dep trai', date: new Date(),isToggleOn: true};

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.tick = this.tick.bind(this);
        this.update = this.update.bind(this);
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    update() {
        this.setState(prevState => ({
            bien: 'UD to quoc loc',
            isToggleOn: !prevState.isToggleOn
        }));

    }
    render() {
        return (
            <div>
                <h1>Hello from Home!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <Child bien={this.state.bien}/>
                <Button update={this.update} value={this.state.isToggleOn ? 'quoc tho' : 'quoc loc'}/>

                <h2>demo list</h2>
                <Blog posts={posts} />
            </div>
        )
    }
}

class Button extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <input onClick={this.props.update} type="button" value={this.props.value}/>
            </div>
        )

    }
}
class Child extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                <div>
                    <h1>this is child {this.props.bien}</h1>
                </div>
            )

    }
}


function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 3, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 4, title: 'Installation', content: 'You can install React from npm.'}
];
export default Home

