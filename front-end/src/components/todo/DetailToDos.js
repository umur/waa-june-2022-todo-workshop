import { useParams } from "react-router-dom";

const DetailToDos = () => {

    const params = useParams();

    const [todosState, setTodosState] = useState({});
    const fecthTodos = async () => {
        let result = await axios.get('http://localhost:8082/todos/'+params.id);
        setTodosState(result.data)
    }
    useEffect(() => {
        fecthTodos();
    }, [params.id])
    return (
        <div>

            <h4>
               

            </h4>
            <h4>
                {todosState.description}
            </h4>
        </div>

    );
}

export default DetailToDos;