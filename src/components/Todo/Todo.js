import React from 'react';
import PropTypes from 'prop-types';
import TodoFilter from "./TodoFilter";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import {filters} from "../../reducers/filter";

const Todo = props => {
    const {filter, todos, todoAdd, todoToggle, todoArchive, todoDelete, filterSet} = props;
    return (
        <div className="todo">
            <TodoFilter filter={filter} filterSet={filterSet}/>
            <TodoInput todoAdd={todoAdd}/>
            <TodoList todos={todos} todoToggle={todoToggle} todoArchive={todoArchive} todoDelete={todoDelete}/>
        </div>
    );
};

Todo.propTypes = {
    filter: PropTypes.string,
    todos: PropTypes.array,
    todoAdd: PropTypes.func,
    todoToggle: PropTypes.func,
    todoArchive: PropTypes.func,
    todoDelete: PropTypes.func,
    filterSet: PropTypes.func,
};

Todo.defaultProps = {
    filter: filters.SHOW_ALL,
    todos: [],
    todoAdd: () => {},
    todoToggle: () => {},
    todoArchive: () => {},
    todoDelete: () => {},
    filterSet: () => {},
};

export default Todo;