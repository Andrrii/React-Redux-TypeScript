import React, { useEffect } from 'react';
import { UserActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList:React.FC = () => {

    const state = useTypedSelector(state => state.todo)

    const {fetchTodos,setTodosPage} = UserActions()
    const pages = [1,2,3,4,5]

    useEffect(() => {
        fetchTodos(state.page,state.limit)
    },[state.page])

    if(state.loading) {
        return <h1>Loading...</h1>
    }

    if(state.error){
        return <h1>{state.error}</h1>
    }

    return (
        <div>
            {state.todos.map(todo => (
                <div key = {todo.id}>{todo.id}. - {todo.title} </div>
            ))}
            <div style = {{display:'flex'}}>
                {pages.map(p => (
                    <div key = {p}
                        onClick = {() => setTodosPage(p)}
                        style = {{
                            border:p === state.page ? '2px solid blue' : '1px solid gray',padding: 10
                        }}
                    >
                        {p} 
                    </div>
                ))}
            </div>

        </div>
    );
};

export default TodoList;