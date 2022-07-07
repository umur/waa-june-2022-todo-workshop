import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Todos from '../todo/Todos';
const MyRouter = () => {
    return (<div>
        <Routes>

            <Route path="/todos" element={<Todos></Todos>} />
        </Routes>

    </div>);
}

export default MyRouter;