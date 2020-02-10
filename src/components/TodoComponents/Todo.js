import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    render() {
        return (
            <h4 onClick={() => this.props.toggleTask(this.props.item.id)}
            className={`item${this.props.item.completed ? "Completed" : ""}`}>
                {this.props.item.task}
            </h4>
        );
    }
}
export default Todo;