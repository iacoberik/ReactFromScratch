import React, {Component} from "react";

class Test extends Component {
    render() {
        let content = '';
        content ? content = 'test' : content = 'test1';

        return (
            <div>
                <div>Test {this.props.name}</div>
                { !content ? 'Este gol' : content } as zice
            </div>
          
        )
    }
}

export default Test