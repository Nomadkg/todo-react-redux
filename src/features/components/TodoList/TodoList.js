import React, { Component } from "react";
import PropTypes from 'prop-types';

import './todo-list.css';

class TodoList extends Component {
    state = {
        text: '',
        todoId: ''
    };

    onTextChange = (event) => {
        this.setState({text: event.target.value})
    };

    editItem = (todo) => {
        this.setState({
            text: todo.text,
            todoId: todo._id
        })
    };

    saveItem = () => {
        this.props.onUpdateItem(this.state.todoId, this.state.text);
        this.setState({
            text: '',
            todoId: ''
        });
    };

    renderItem = (todo) => {
        if (this.state.todoId === todo._id) {
            return (
                <span>
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={this.onTextChange}/>
                    <button onClick={this.saveItem}>Edit</button>
                </span>
            );
        }

        return (<span onDoubleClick={() => this.editItem(todo)}>{todo.text}</span>)
    };

    render() {
        const { list, onToggleItem, onRemoveItem } = this.props;
        return (
            <div className="todo-list">
                { list.map(todo => <div className="todo" key={todo._id}
                                        style={ { textDecoration: todo.toggle ? 'line-through' : 'none'} }>
                    {this.renderItem(todo)}&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => onToggleItem(todo._id)}>Toggle</button>
                    <button onClick={() => onRemoveItem(todo._id)}>Delete</button>
                </div>)}
            </div>
        );
    }
}

TodoList.propTypes = {
    list:         PropTypes.array,
    onRemoveItem: PropTypes.func,
    onToggleItem: PropTypes.func,
    onUpdateItem: PropTypes.func,
};

export default TodoList;