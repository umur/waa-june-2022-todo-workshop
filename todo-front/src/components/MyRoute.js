import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Todos from './todo/Todos'
import DetailTodo from './todo/DetailTodo'

export default function MyRouter() {
    return (
        <div className="container">
            <Routes>
                <Route path='/todos' element={<Todos></Todos>}></Route>
                <Route path='/todos/:id' element={<DetailTodo></DetailTodo>}></Route>
            </Routes>
        </div>
    )
}