import React from 'react';

class Todo extends React.Component {
    

    render() {
        return (
            <p onClick={() => this.props.toggleTask(this.props.item.id)}>
                {this.props.item.task}
            </p>
        );
    }
}
export default Todo;