import React from 'react'
import { useNavigate } from 'react-router'

export default function Todo(props) {

    const navigate = useNavigate();

    const onClicked = (id) => {
        navigate('/todos/' + id)
    }

    return (
        <div className="container">
            <table className="table table-striped">

                <tbody>
                    <tr>
                        <td onClick={() => {
                            onClicked(props.id)
                        }}>{props.title}
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <div onClick={() => { onClicked(props.id) }}>
                <h2>{props.title}</h2>
            </div> */}

        </div>
    )
}