import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
  render() 
  {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
