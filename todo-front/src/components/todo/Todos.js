import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Todo from './Todo';

export default function Todos() {

    const [todosState, setTodosState] = useState([]);

    const fetchTodos = async () => {
        const result = await axios.get("http://localhost:8080/todos");
        // let copy = [...todosState]
        setTodosState(result.data);
    }

    useEffect(() => {
        fetchTodos();
    }, [])

    return (
        <div>
            {
                todosState.map((item) => {
                    return <Todo
                        id={item.id}
                        title={item.title}
                        key={item.id}
                    />

                })
            }
        </div>

    )
}