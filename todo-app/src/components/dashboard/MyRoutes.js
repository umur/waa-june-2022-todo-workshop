import React from "react";
import { Route, Routes } from "react-router";
import Login from "../auth/Login";
import DetailToDo from "../todo/DetailToDo";
import Todos from "../todo/Todos";

export default function MyRoutes(){
    return (
        <Routes>
           <Route path="/todos" element={ <Todos></Todos>} /> 

           <Route path="/login" element={ <Login></Login>} /> 


           <Route path="/todos/:id" element={ <DetailToDo></DetailToDo>} /> 
        </Routes>
    )
}