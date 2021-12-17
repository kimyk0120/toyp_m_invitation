import React, {Component} from "react";

class Counter extends Component{
    state = {number_test: 0}

    handleIncrease = () => {
        this.setState({
            number_test: this.state.number_test + 1
        })
    }

    handleDecrease = () => {
        this.setState({
                number_test: this.state.number_test - 1
            }
        )
    }

    render() {
        return(
            <div>
                <h1>counter</h1>
                <div> val : {this.state.number_test}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }

} //.Counter

export default Counter;