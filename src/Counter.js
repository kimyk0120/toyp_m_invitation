import React, {Component} from "react";

class Counter extends Component {
    state = {number_test: 0}

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