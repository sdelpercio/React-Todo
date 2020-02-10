// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {};
    // }

    render() {
        return (
            <>
                <h2>Todo List</h2>
                <div>
                    {
                        this.props.listOfTodos.map(item => (
                            <Todo 
                                key={item.id} 
                                item={item} 
                                toggleTask={this.props.toggleTask} 
                            />
                        ))
                    }
                </div>
            </>
        );
    }
}
export default TodoList;