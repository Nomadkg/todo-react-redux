import React, { Component } from "react";
import PropTypes from 'prop-types';

class List extends Component {
    state = {
        text: '',
        todoId: ''
    };

    onTextChange = (event) => {
        this.setState({text: event.target.value});
    };

    editItem = (todo) => {
        this.setState({todoId: todo.id, text: todo.text});
    };

    saveItem = () => {
        this.props.onUpdateItem(this.state.todoId, this.state.text);
        this.setState({todoId: '', text: ''});
    };

    renderItem = (todo) => {
        if (this.state.todoId === todo.id) {
            return (
                <span>
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={this.onTextChange}/>
                    <button
                        onClick={this.saveItem}>Edit
                    </button>
                </span>
            );
        }
        return (<span onDoubleClick={() => this.editItem(todo)}>{todo.text}</span>)
    };

    render() {
        let { list, onRemoveItem, onToggleItem } = this.props;

        return (
            <div className="todo-list">
                { list.map(todo => <div className="todo" key={todo.id}
                                         style={ { textDecoration: todo.done ? 'line-through' : 'none'} }>
                        {this.renderItem(todo)}&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => onToggleItem(todo.id)}>Toggle</button>
                        <button onClick={() => onRemoveItem(todo.id)}>Delete</button>
                    </div>)
                }
            </div>
        );
    }
}

List.propTypes = {
    list:         PropTypes.array,
    onRemoveItem: PropTypes.func,
    onToggleItem: PropTypes.func,
    onUpdateItem: PropTypes.func,
};

export default List;