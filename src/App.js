import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

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
      todoList: data
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

    this.setState({todoList: [...this.state.todoList, newTodo]});
    alert(`${newTodo.name} has been added to the list`)
  }

  toggleTodo = id =>
  {
    const newTodoList = this.state.todoList.map(item => {
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

    this.setState({todoList: newTodoList});
  }

  clearCompleted = () =>
  {
    const answer = window.confirm("Are you sure you want to clear the completed items?")
    if(answer)
    {
      const temp = this.state.todoList.filter(item => !item.isFinished)
      this.setState({todoList: temp});
    }
  }

  render() 
  {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todoItems={this.state.todoList} 
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}/>
        
        <TodoForm addNewTodo={this.addNewTodo} />
      </div>
    );
  }
}

export default App;
