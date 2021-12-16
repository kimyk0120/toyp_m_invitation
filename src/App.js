import logo from './logo.svg';
import './App.css';
import {Fragment} from "react";

function App() {

    let test_name = 'test_name_3'
    let test_name2 = 'test_name_4'
    const value = 1;

    return (
        <div>
            {/*{1 + 1 === 3 ? (<div>yes</div>) : (<div>no</div>)}*/}
            {/* 주석처리 */}
            {/*{1 + 1 === 2 && (<div>yes</div>)}*/}
            <div className={"App"}>
                {
                    (function() {
                        if (value === 1) return (<div>하나</div>);
                        if (value === 2) return (<div>둘</div>);
                        if (value === 3) return (<div>셋</div>);
                    })()
                }
            </div>
        </div>
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
