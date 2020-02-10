import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    

    render() {
        return (
            <p onClick={() => this.props.toggleTask(this.props.item.id)}
            className={`item${this.props.item.completed ? "Completed" : ""}`}>
                {this.props.item.task}
            </p>
        );
    }
}
export default Todo;