import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Todo(props) {

    const navigate = useNavigate();

    const onClicked = (id) => {
        navigate('/todos/' + id);
    }

    return (

        <a onClick={() => { onClicked(props.id) }} className="list-group-item list-group-item-action">
            {props.title}                
        </a>

    )

}