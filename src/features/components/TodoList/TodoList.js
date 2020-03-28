import React, { Component } from "react";
import PropTypes from 'prop-types';

import './todo-list.css';

export default class TodoList extends Component {

    state = {
        text: " ",
        todoId: " "
    };

    onTextChange = (event) => {
        this.setState({ text: event.target.value });
    };

    editItem = (todo) => {
        this.setState({todoId: todo._id, text: todo.text});
    };

    saveItem = () => {
        const { onUpdateItem } = this.props;
        onUpdateItem(this.state.todoId, this.state.text);
        this.setState({ todoId: '', text: '' });
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