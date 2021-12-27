import logo from './logo.svg';
import './App.css';
import {Component, Fragment} from "react";
// import MyName from "./MyName";
// import Counter from "./Counter";
import PhoneForm from "./components/PhoneForm";

class App extends Component {

    handleCreate = (data) => {
        console.log(data);
    }
    render() {
        return (
            <div>
                <PhoneForm phonform_onCreate={this.handleCreate} />
            </div>
            // <Fragment>
            //     <MyName name={"react_2"} />
            //     <Counter />
            //     힝헷
            // </Fragment>
            // <MyName  />
        )
    }
}

export default App;
