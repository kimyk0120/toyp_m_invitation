import React, {Component} from "react";

class Counter extends Component {
    state = {number_test: 0}

    // Lifecycle test
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("componentWillMount (deprecated)")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 5 의 배수라면 리렌더링 하지 않음
        console.log('shouldComponentUpdate');
        if (nextState.number_test % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    handleIncrease = () => {
        const {number_test} = this.state;  // {속성이름과 같은이름} 로 해야함
        this.setState(
            ({number_test}) => ({
                number_test: number_test + 1
            })
        )
    }//.handleIncrease

    handleDecrease = () => {
        this.setState({
                number_test: this.state.number_test - 1
            }
        )
    }//.handleDecrease

    render() {
        return (
            <div>
                {/*{console.log(this.state)}*/}
                {/*{console.log(...this.test_arr)}  /!* 전개 연산자 *!/*/}
                <h1>counter</h1>
                <div> val : {this.state.number_test}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    } //.render

} //.Counter

export default Counter;