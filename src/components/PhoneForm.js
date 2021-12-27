// file: src/components/PhoneForm.js
import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        // console.log(e.target.name)

        this.setState({
            [e.target.name] : e.target.value  // [e.target.name] => Computed property names
        });
    }
    render() {
        return (
            <form>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name='name'
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <div>{this.state.name} : {this.state.phone}</div>
            </form>
        );
    }
}

export default PhoneForm;