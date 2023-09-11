import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

export const useTodos = (initialState = []) => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        };
        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    };

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    };

    return {
        todos,
        todosCount: todos.length,
        pendingTodos: todos.filter((todo) => !todo.done).length,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
    };
};
