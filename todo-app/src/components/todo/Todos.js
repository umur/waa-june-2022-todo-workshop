import axios from "axios";
import React, { useEffect, useState } from "react";
import Todo from "./Todo";

export default function Todos() {

    const [todosState, setTodosState] = useState([]);

    const fetchTodos = async () => {
        const result = await axios.get('http://localhost:8080/todos');
        setTodosState(result.data);
    }

    useEffect(() => {
        fetchTodos();
    }, []);

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