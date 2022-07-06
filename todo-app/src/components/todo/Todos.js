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
        <div className="col-6 offset-3">
            <div className="list-group todo-list">
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
        </div>
    )
}