import '../css/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoStore from './TodoStore';
import TodoList from './TodoList';

const app = document.getElementById('app');

ReactDOM.render(
    /* jshint ignore:start */
    <TodoList store={TodoStore} />,
    app
    /* jshint ignore:end */
);
