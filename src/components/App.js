import React from "react";

// class App extends Component {
//     render(){
//         return <h1>My React from Scratch! {this.props.nume}</h1>
//     }
// }

const App = ({nume, children}) => {
    return(
        <div>
            <h1>My React from Scratch! {nume}</h1>
            {children}
        </div>
    )
}

export default App