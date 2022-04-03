import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Pagination from '../../Pagination/pagination'

import './todos.css'
import { Table } from 'react-bootstrap';
import useFetchTodo from '../../Services/get-todo';
import { useSelector } from 'react-redux';

const Todos = () => {
    const {todo: todos, isPending, errorReporting } = useFetchTodo('http://localhost:8081/task')
    // const todos = useSelector(state => state.posts)
    console.log("This is todoss ", todos)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10);
    

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = todos.slice(indexOfFirstPost, indexOfLastPost)
    var howManyPages;
    if(todos.length !== 0){
        howManyPages = Math.ceil(todos.length/postsPerPage)

    }

    console.log("TOF", todos)
    return ( 
        <div className="todos-wrapper">
            <div className="new-todo">
                <Link to="/new-todos" className='btn-new'>New <i className="fa fa-plus" aria-hidden="true"></i></Link>
            </div>
        <div className='todos-content-wrapper'>
        <Table className='table-wrapper' striped bordered hover variant="white">
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>Task Title</th>
                    <th>Task Date</th>
                    <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {
                   currentPosts && currentPosts.map((res) => (
                        <tr key={res.id}>
                            <td><Link to='/todo-details'>{res.id}</Link></td>
                            <td>{res.taskTitle}</td>
                            <td>{res.taskDate}</td>
                            <td>
                                <Link to='/' className='btn-edit'><i class="fa fa-pencil" aria-hidden="true"></i></Link>
                                <Link to='/' className='btn-trash' onClick={(e)=> console.log("here", e )}><i class="fa fa-trash" aria-hidden="true"></i></Link>

                            </td>
                        </tr>

                    ))
                }
            </tbody>
            </Table>
            <Pagination pages = {howManyPages} setCurrentPage={setCurrentPage} />

            <div>{errorReporting}</div>
            <div>{isPending}</div>
        </div>
        </div>
     );
}
 
export default Todos;