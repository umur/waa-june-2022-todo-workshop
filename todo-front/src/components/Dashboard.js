import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import MyRouter from './MyRoute'

export default function Dashboard() {
    return (
        <div className='container'>
            <Header></Header>
            <MyRouter></MyRouter>
        </div>
    )
}