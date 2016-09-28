import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';

import TodoApp from './components/TodoApp';

const todos = List.of(
    Map({id: 1, text: 'React', status: 'active', editing: false}),
    Map({id: 2, text: 'Redux', status: 'active', editing: false}),
);

ReactDOM.render(
    <TodoApp todos={todos} />,
    document.getElementById('app')
);
