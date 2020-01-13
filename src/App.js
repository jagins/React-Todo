import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm';

const data = [
  {
    id: 1,
    name: 'Learn setState()',
    isFinished: false
  },

  {
    id: 2,
    name: 'Style App',
    isFinished: false
  },

  {
    id: 3,
    name: 'Learn React',
    isFinished: false
  }
]

class App extends Component 
{
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor()
  {
    super();
    this.state = {
      todos: data
    }
  }

  addNewTodo = todoName =>
  {
    const newTodo = 
    {
      name: todoName,
      id: Date.now(),
      isFinished: false
    }

    this.setState({todos: [...this.state.todos, newTodo]});
  }

  toggleTodo = id =>
  {
    const newTodos = this.state.todos.map(item => {
      if(item.id === id)
      {
        return {
          ...item,
          isFinished: !item.isFinished
        };
      }
      else
      {
        return item;
      }
    });

    this.setState({todos: newTodos});
  }

  render() 
  {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todoItems={this.state.todos} 
          toggleTodo={this.toggleTodo}/>
        
        <TodoForm addNewTodo={this.addNewTodo} />
      </div>
    );
  }
}

export default App;
