import React, {Component, Fragment} from 'react';
import TodoContainer from './containers/TodoContainer';

class App extends Component {
    render() {
        return (
            <Fragment>
                <TodoContainer/>
            </Fragment>
        );
    }
}

export default App;
