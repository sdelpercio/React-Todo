import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100vh;
    font-size: 62.5%;
    background-image: linear-gradient( 135deg, #92FFC0 10%, #002661 100%);
  }
`

const StyledDiv = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const StyledTitle = styled.h2`
  font-size: 4rem;
  margin: 5% auto;
  border-bottom: 1px solid black;
  width: 400px;
  text-align: center;
`

const todos = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      listOfTodos: todos
    };
  }

  // function to handle adding a new task to the list from input
  addToList = input => {
    const newTodo = {
      task: input,
      id: Date.now(),
      completed: false
    };
    this.setState({
      listOfTodos: [...this.state.listOfTodos, newTodo]
    });
  }

  // function to cross off a task
  toggleTask = taskID => {
    const newList = this.state.listOfTodos.map(item => {
      if (item.id === taskID) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      else {
        return item;
      }
    });
    this.setState({
      listOfTodos: newList
    })
  }

  // function to clear crossed off tasks
  clearCompleted = () => {
    const narrowedList = this.state.listOfTodos.filter(item =>
      item.completed === false
    );
    this.setState({
      listOfTodos: narrowedList
    })
  }

  render() {
    return (
      <StyledDiv>
        <GlobalStyle />
        <StyledTitle>Todo...</StyledTitle>
        <TodoList 
          listOfTodos={this.state.listOfTodos} 
          toggleTask={this.toggleTask} 
        />
        <TodoForm 
          addToList={this.addToList} 
          clearCompleted={this.clearCompleted}
        />
      </StyledDiv>
    );
  }
}

export default App;
