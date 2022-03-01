
import React, {Component} from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component{
    render() {

        const {todosm, onToggle, onRemove} = this.props

        return (
            <div>
                <TodoItem text='Hello'/>
                <TodoItem text='React'/>
                <TodoItem text='Hi'/>
            </div>
        );
    }
}


export default TodoItemList