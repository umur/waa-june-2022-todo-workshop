import { useNavigate } from "react-router-dom";

const Todo = (props) => {

    const navigate = useNavigate();

    const onClicked = (id) => {
        navigate('/todos/' + id);
    }
    return (

        <div onClicked={() => { onClicked(props.id) }}>
            <h2>{props.title}</h2>

        </div>
    );
}

export default Todo;