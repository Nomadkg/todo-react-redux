import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';

import TodoList from '../features/components/TodoList';
import Form from '../features/components/Form';
import Header from '../common/components/Header';
import { add, remove, toggle, update, load } from '../features/redux/thunks';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;


function App () {
    const todoList = useSelector(state => state.rootReducer);
    const dispatch = useDispatch();

    const onAddTodo = (todo) => {
        dispatch(add(todo))
    };

    const onRemoveTodo = (id) => {
        dispatch(remove(id))
    };

    const onToggleTodo = (id) => {
        dispatch(toggle(id))
    };

    const onUpdateTodo = (id, todo) => {
        dispatch(update(id, todo))
    };

    const onLoadTodos = () => {
        dispatch(load())
    };

    return (
        <>
            <GlobalStyle />
            <Container>
                <Header
                    title        = {'To-Do List'}
                />
                <Form
                    placeholder  = {'Type a todo, then hit enter!'}
                    onAddTodo    = { onAddTodo }
                />
                <TodoList
                    list         = { todoList }
                    onRemoveItem = { onRemoveTodo }
                    onToggleItem = { onToggleTodo }
                    onUpdateItem = { onUpdateTodo }
                    onLoadTodos  = { onLoadTodos }
                />
            </Container>
        </>
    )
}

export default App;