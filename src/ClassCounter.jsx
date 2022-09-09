import React from 'react';

export default class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.incr = this.incr.bind(this);
        this.dicr = this.dicr.bind(this);
    }
    incr() {
        this.setState({count: this.state.count + 1})
    }
    dicr() {
        this.setState({count: this.state.count - 1})
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.incr}>incr</button>
                <button onClick={this.dicr}>dicr</button>
            </div>
        )
    }
}

