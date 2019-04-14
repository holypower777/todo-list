import React, {useEffect} from 'react';
import {filters} from "../../reducers/filter";

const TodoFilter = props => {
    const {filter, filterSet} = props;

    const handleClick = e => {
        if (filter === e.target.value) {
            return;
        }
        filterSet(e.target.value);
    };

    useEffect(() => {
        switch (filter) {
            case filters.SHOW_ACTIVE:
                document.title = 'Active tasks';
                break;
            case filters.SHOW_DONE:
                document.title = 'Done tasks';
                break;
            case filters.SHOW_ARCHIVED:
                document.title = 'Archived tasks';
                break;
            default:
                document.title = 'All tasks';
                break;
        }
    });

    return (
        <header>
            <nav>
                <button onClick={handleClick} className={`btn ${filter === filters.SHOW_ALL ? 'btn-primary' : 'btn-secondary'}`} value={filters.SHOW_ALL}>All</button>
                <button onClick={handleClick} className={`btn ${filter === filters.SHOW_ACTIVE ? 'btn-primary' : 'btn-secondary'}`} value={filters.SHOW_ACTIVE}>Active</button>
                <button onClick={handleClick} className={`btn ${filter === filters.SHOW_DONE ? 'btn-primary' : 'btn-secondary'}`} value={filters.SHOW_DONE}>Done</button>
                <button onClick={handleClick} className={`btn ${filter === filters.SHOW_ARCHIVED ? 'btn-primary' : 'btn-secondary'}`} value={filters.SHOW_ARCHIVED}>Archived</button>
            </nav>
        </header>
    );
};

export default TodoFilter;