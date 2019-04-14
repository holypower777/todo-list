import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = props => {
    const {todo, todoToggle, todoArchive, todoDelete} = props;
    const className = `list-group-item ${todo.completed ? 'list-group-item-success' : ''} ${todo.archived ? 'list-group-item-dark': ''} d-flex justify-content-between align-items-center`;

    let buttons;
    if (todo.archived) {
        buttons =
            <div className="input-group-append">
                {todo.completed ? <span className="badge badge-success">Done</span> : <span className="badge badge-danger">Not done</span>}
                <button className="btn btn-outline-secondary" onClick={() => todoDelete(todo.id)}>Delete</button>
            </div>
    } else {
        buttons =
            <div className="input-group-append">
                <button className="btn btn-success" onClick={() => todoToggle(todo.id)}>{todo.completed ? 'Mark as not done' : 'Mark as done'}</button>
                <button className="btn btn-dark" onClick={() => todoArchive(todo.id)}>Archive</button>
                <button className="btn btn-danger" onClick={() => todoDelete(todo.id)}>Delete</button>
            </div>
    }

    return (
        <li className={className}>
            {todo.text}
            {buttons}
        </li>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object
}

TodoItem.defaultProps = {
    todo: {}
}

export default TodoItem;