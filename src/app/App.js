import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
    add,
    remove,
    toggle,
    update,
    loadTodos,
} from "../features/redux/actions";

import TodoList from "../features/components/TodoList";
import Input from "../features/components/Input";
import Title from "../common/components/Title";
import "./app.css";

function App(props) {
    const { todoList, add, remove, toggle, loadTodos, update } = props;

    const onAddTodo = (todo) => {
        add(todo);
    };

    const onRemoveTodo = (id) => {
        remove(id);
    };

    const onToggleTodo = (id) => {
        toggle(id);
    };

    const onUpdateTodo = (id, todo) => {
        update(id, todo);
    };

    const onLoadTodos = () => {
        loadTodos();
    };

    return (
        <div className="container">
            <Title>To-Do List</Title>
            <Input
                placeholder={"Type a todo, then hit enter!"}
                onAddTodo={onAddTodo}
            />
            <TodoList
                list={todoList}
                onRemoveItem={onRemoveTodo}
                onToggleItem={onToggleTodo}
                onUpdateItem={onUpdateTodo}
                onLoadTodos={onLoadTodos}
            />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        todoList: state.rootReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { add, toggle, update, remove, loadTodos },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
