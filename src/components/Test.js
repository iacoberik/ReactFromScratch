import React from "react";

// class Test {
//     render() {
//         let content = '';
//         content ? content = 'test' : content = 'test1';

//         return (
//             <div>
//                 <div>Test {this.props.name}</div>
//                 { !content ? 'Este gol' : content } as zice
//             </div>
          
//         )
//     }
// }

function Test(props) {
    let content = '';
    content ? content = 'test' : content = 'test1';

    return (
        <div>
            <p>Test {props.name}</p>
            <p>{ !content ? 'Este gol' : content } as zice ceva</p>
        </div>  
    )
}

export default Test