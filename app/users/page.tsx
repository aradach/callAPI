"use client"
import { useEffect, useState } from "react"

const User = () => {
    const [users, serUsers] = useState([])
    const url = "https://jsonplaceholder.typicode.com/users"

    useEffect(()=>{
        const fetchUser = async() =>{
            const res = await fetch (url);
            const data = await res.json()
            console.log(data)
        };
        fetchUser();
    },[]);

    return (
        <ul>
            {users.map((user)=>(<li key={users.id}>{user.name}</li>))}
        </ul>
    )
}

const Todo = () => {
    const [todos, setTodos] = useState([])
    const url = "https://jsonplaceholder.typicode.com/todos"

    useEffect(()=>{
        const fetchUser = async() =>{
            const res = await fetch (url);
            const data = await res.json()
            console.log(data)
        };
        fetchUser();
    },[]);

    return (
        <ul>
            {todos.map((user)=>(<li key={todos.id}>{user.name}</li>))}
        </ul>
    )
}

const Userpage = () => {
  return (
    <>
        <User></User>
        <Todo></Todo>
    </>
  )
}
export default Userpage