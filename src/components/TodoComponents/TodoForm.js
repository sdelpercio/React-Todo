import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: ''
        };
    }

    handleChange = event => {
        this.setState({
            newTask: event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.addToList(this.state.newTask);
        this.setState({
            newTask: ''
        });
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='newTask' 
                        value={this.state.newTask} 
                        onChange={this.handleChange}
                        placeholder='enter a todo' 
                    />
                    <button type='submit'>Add to List</button>
                    <button>Clear Completed</button>
                </form>
            </>
        );
    }
}
export default TodoForm;