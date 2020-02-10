import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

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
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          listOfTodos={this.state.listOfTodos} 
          toggleTask={this.toggleTask} 
        />
        <TodoForm 
          addToList={this.addToList} 
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
