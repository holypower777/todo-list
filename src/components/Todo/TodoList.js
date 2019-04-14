import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = props => {
    const {todos, todoToggle, todoArchive, todoDelete} = props;

    const todosList = todos.map(todo =>
        <TodoItem key={todo.id} todo={todo} todoToggle={todoToggle} todoArchive={todoArchive} todoDelete={todoDelete}/>
    );

    return (
        <section>
            <ul className='todo__list list-group'>
                {todosList}
            </ul>
        </section>

    );
};

export default TodoList;