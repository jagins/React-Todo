import React, { Component } from 'react';

class TodoForm extends Component
{
    constructor()
    {
        super();
        this.state = {newItem: ''}
    }

    handleChange = event =>
    {
        this.setState({newItem: event.target.value});
    }

    handleSubmit = event =>
    {
        event.preventDefault();
        this.props.addNewTodo(this.state.newItem);
        this.setState({newItem: ''});
    }

    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    name='item' 
                    value={this.state.newItem} 
                    onChange={this.handleChange}
                    placeholder='Enter new todo item'
                />
                <button className='new-btn'>Add New Todo</button>
            </form>
        );
    }
}
export default TodoForm;