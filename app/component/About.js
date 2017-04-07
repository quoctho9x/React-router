import React, {Component} from 'react'

class About extends Component {
    render() {
        return (
            <div>
                <h3>Welcome to the About Page</h3>
                { this.props.params.name && <h2>Hello, {this.props.params.name}</h2>}
                <SearchExample items={ libraries }/>
            </div>
        )
    }
}


// Let's create a "real-time search" component
class SearchExample extends Component {
    constructor(props) {
        super(props);
        this.state = {searchString: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({searchString: e.target.value});
    }

    render() {
        var libraries = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();

       /* const libraries__list = libraries.map(function (l, index) {
            return <li key={index}>{l.name} <a href={l.url}>{l.url}</a></li>
        })*/

        if (searchString.length > 0) {
            // We are searching. Filter the results.
            libraries = libraries.filter(function (l) {
                return l.name.toLowerCase().match(searchString);
            });
        }

        return(
            <div>
                <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here"/>
                <ul className="list__about">
                    {
                        libraries.map(function (l, index) {
                        return <li key={index}>{l.name} <a href={l.url}>{l.url}</a></li>
                        })
                    }
                </ul>
             {/*   <ul className="list__about">
                    {libraries__list}
                </ul>*/}

            </div>
        )
    }
}


var libraries = [

    {name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    {name: 'AngularJS', url: 'https://angularjs.org/'},
    {name: 'jQuery', url: 'http://jquery.com/'},
    {name: 'Prototype', url: 'http://www.prototypejs.org/'},
    {name: 'React', url: 'http://facebook.github.io/react/'},
    {name: 'Ember', url: 'http://emberjs.com/'},
    {name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    {name: 'Dojo', url: 'http://dojotoolkit.org/'},
    {name: 'Mootools', url: 'http://mootools.net/'},
    {name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    {name: 'Lodash', url: 'http://lodash.com/'},
    {name: 'Moment', url: 'http://momentjs.com/'},
    {name: 'Express', url: 'http://expressjs.com/'},
    {name: 'Koa', url: 'http://koajs.com/'},

];

export default About