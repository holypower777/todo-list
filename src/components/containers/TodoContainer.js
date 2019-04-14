import {connect} from "react-redux";
import {todoAdd, todoToggle, todoArchive, todoDelete} from "../../actions/todo";
import {filterSet} from "../../actions/filter";
import {filters} from "../../reducers/filter";

import Todo from "../Todo/Todo";


const filterTodos = (todos, filter) => {
    switch (filter) {
        case filters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed && !todo.archived)
        case filters.SHOW_DONE:
            return todos.filter(todo => todo.completed)
        case filters.SHOW_ARCHIVED:
            return todos.filter(todo => todo.archived)
        default:
            return todos
    }
};

const mapStateToProps = ({filter, todos}) => ({
    filter,
    todos: filterTodos(todos, filter)
});

export default connect(
    mapStateToProps,
    {todoAdd, todoToggle, todoArchive, todoDelete, filterSet}
)(Todo)