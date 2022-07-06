import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DetailTodo() {

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

        <div className="col-6 offset-3 detail-card">
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{todoState.title}</h5>
                    <p className="card-text">{todoState.description}</p>
                </div>
            </div>
        </div>


    )

}