import React, {useState} from 'react';

const TodoInput = props => {
    const [task, setTask] = useState('');

    const handleChange = e => setTask(e.target.value);

    const handleClick = () => {
        if (task.length > 2) {
            props.todoAdd(task)
            setTask('');
        }
    };

    return (
        <section className="todo__input input-group">
            <input type="text" className="form-control" value={task} placeholder="Buy some milk..." onChange={handleChange}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={handleClick}>Add</button>
                </div>
        </section>
    );
};

export default TodoInput;