import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom';

export default function DetailTodo() {

    const params = useParams();
    const [todoState, setTodosState] = useState({});

    const fetchTodo = async () => {
        const result = await axios.get('http://localhost:8080/todos/' + params.id)
        setTodosState(result.data)
    }

    useEffect(() => {
        fetchTodo();
    }, [params.id])

    return (
        <div className='containter'>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{todoState.title}</h5>
                    <p className="card-text">{todoState.description}</p>
                    <NavLink to='/todos' className='btn btn-primary'>Back</NavLink>
                </div>
            </div>
        </div>
    )

}