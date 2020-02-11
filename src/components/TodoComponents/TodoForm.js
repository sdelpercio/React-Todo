import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const StyledInput = styled.input`
    width: 100%;
    padding: 1rem 3.5rem;
    border: 1px solid black;
    border-radius: 3px;
    background-color: white;
    margin-bottom: 2%;
`
const StyledButton = styled.button`
    width: 100%;
    padding: 1.5rem 4rem;
    border: none;
    border-radius: 5px;
    background-image: linear-gradient(to right, #403B4A 0%, #E7E9BB 51%, #403B4A 100%);
    margin-bottom: 2%;


    &:hover {
        background-position: right center;
    }
`

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
                <StyledForm onSubmit={this.handleSubmit}>
                    <StyledInput 
                        type='text'
                        name='newTask' 
                        value={this.state.newTask} 
                        onChange={this.handleChange}
                        placeholder='enter a todo' 
                    />
                    <StyledButton type='submit'>Add to List</StyledButton>
                    <StyledButton onClick={this.props.clearCompleted}>
                        Clear Completed
                    </StyledButton>
                </StyledForm>
            </>
        );
    }
}
export default TodoForm;