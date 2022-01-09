// noinspection JSCheckFunctionSignatures

import logo from './logo.svg';
import './App.css';
import {Component, Fragment} from "react";
// import MyName from "./MyName";
// import Counter from "./Counter";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
    id = 2

    state = {
        information: [
            {
                id: 0,
                name: '김민준',
                phone: '010-0000-0000'
            },
            {
                id: 1,
                name: '홍길동',
                phone: '010-0000-0001'
            }
        ]
    }

    handleCreate = (data) => {
        // console.log(data);
        const {information} = this.state;
        this.setState({
            information: information.concat({id: this.id++, ...data})
        })
    }

    handleRemove = (id) => {
        const {information} = this.state;
        this.setState({
            information: information.filter(info => info.id !== id)
        })
    }

    render() {
        const {information} = this.state;
        return (
            <div>
                <PhoneForm phonform_onCreate={this.handleCreate} />
                <PhoneInfoList data={information}
                               onRemove={this.handleRemove}/>
                {/*{JSON.stringify(information)}*/}
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
