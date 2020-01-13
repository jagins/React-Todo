// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

function TodoList(props)
{
    return(
        <div className='Todo-List'>
            {props.todoItems.map(item => 
            (
                <Todo key={item.id} item={item}/>
            ))}
            <button className='clear-btn'>Clear Todos</button>
        </div>
    );
}

export default TodoList;