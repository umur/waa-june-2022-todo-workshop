import Todo from "./Todo";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Todos = () => {
    const [todosState, setTodosState] = useState([]);
    const fecthTodos = async () => {
        let result = await axios.get('http://localhost:8082/todos');
            setTodosState(result.data)
    }
    useEffect(() => {
        fecthTodos();
    }, [])
    return (

        <div>{
        todosState.map((c) => {
                return <Todo
                    id={c.id}
                    title={c.title}
                    key={c.id}
                ></Todo>
            })

        }
        </div>
    );
}

export default Todos;