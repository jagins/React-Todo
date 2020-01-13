import React from 'react';

function Todo(props)
{
    return(
        <div className={`item${props.item.isFinished ? ' finished' : ''}`}
            onClick={() => props.toggleTodo(props.item.id)}>
            <p>{props.item.name}</p>
        </div>
    );
}

export default Todo;