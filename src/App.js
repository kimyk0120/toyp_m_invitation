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
        ],
        keyword: ''
    }

    handleChange = (e) => {
        this.setState({
            keyword: e.target.value,
        });
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

    handleUpdate = (id, data) => {
        const {information} = this.state;
        this.setState({
            information: information.map (info => id === info.id
                ? { ...info, ...data } : info)
        })
    }

    render() {
        const {information, keyword} = this.state;
        const filteredList = information.filter(
            info => info.name.indexOf(keyword) !== -1
        );
        return (
            <div>
                <PhoneForm phonform_onCreate={this.handleCreate} />

                <p>
                    <input
                        placeholder="검색 할 이름을 입력하세요.."
                        onChange={this.handleChange}
                        value={keyword}
                    />
                </p>
                <hr />

                <PhoneInfoList data={filteredList}
                               onRemove={this.handleRemove}
                                onUpdate={this.handleUpdate} />
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

// 재사용 가능한 컴포넌트를 만듭니다.
// props 는 부모에게서 전달받는 값입니다.
// state 는 자기 자신이 지니고 있는 데이터입니다.
// props 나 state 가 바뀌면 컴포넌트는 리렌더링 합니다.
// LifeCycle API 를 통해서 컴포넌트 마운트, 업데이트, 언마운트 전후로
// 처리 할 로직을 설정하거나 리렌더링을 막아줄수도 있습니다.