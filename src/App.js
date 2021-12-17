import logo from './logo.svg';
import './App.css';
import {Fragment} from "react";
import MyName from "./MyName";
import Counter from "./Counter";

function App() {
    return (
        <Fragment>
            <MyName name={"react_2"} />
            <Counter />
        </Fragment>
        // <MyName  />
    )
}

export default App;
