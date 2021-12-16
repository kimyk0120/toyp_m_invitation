import logo from './logo.svg';
import './App.css';
import {Fragment} from "react";

function App() {

    let test_name = 'test_name_3'
    

    return (
        <Fragment>
            <input type="text"/>
            <div>{test_name}</div>
            <div>test2</div>
        </Fragment>
        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo"/>
        //         <p>
        //             Edit <code>src/App.js</code> and save to reload.
        //         </p>
        //         <a
        //             className="App-link"
        //             href="https://reactjs.org"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             Learn React - YK TEST
        //         </a>
        //     </header>
        // </div>
    );
}

export default App;
