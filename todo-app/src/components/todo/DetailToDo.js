import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DetailTodo(){

    const params = useParams();

    const [todoState, setTodoState] = useState({});

    const fetchTodo = async () => {
        const result = await axios.get('http://localhost:8080/todos/' + params.id);
        setTodoState(result.data);
    }

    useEffect(() => {
        fetchTodo();
    }, [params.id])

    return (
        <div>

            <h4>{todoState.title}</h4>
            <h4>{todoState.description}</h4>

        </div>
    )

}