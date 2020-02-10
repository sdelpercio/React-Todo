// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const StyledList = styled.div`
    margin-bottom: 5%;
    width: 500px;
    font-size: 2rem;
    text-align: center;
`

class TodoList extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {};
    // }

    render() {
        return (
            <>
                <StyledList>
                    {
                        this.props.listOfTodos.map(item => (
                            <Todo 
                                key={item.id} 
                                item={item} 
                                toggleTask={this.props.toggleTask} 
                            />
                        ))
                    }
                </StyledList>
            </>
        );
    }
}
export default TodoList;