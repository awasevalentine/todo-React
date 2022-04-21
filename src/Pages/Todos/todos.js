import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Pagination from '../../Pagination/pagination'
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './css/todos.css'
import TodoService from '../../Services/todosService';
import { reset } from '../../Redux/todoSlice';

const Todos = () => {

    const { getTodos, deleteTodos } = TodoService
    const dispatch = useDispatch();
    const { error, status, todos } = useSelector(state=> state.todos)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10);

    useEffect(()=>{
        if(status === 'idle'){
            dispatch(getTodos())
        }
    }, [error, status, dispatch])


    function deleteTodo(todoId){
        dispatch(deleteTodo(todoId))

        if(status === 'success'){
            todos.filter(res => res.id !== todoId)
        }
        dispatch(reset())
    }
 
    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    var currentPosts
    if(todos.length > 0){
        currentPosts = todos.slice(indexOfFirstPost, indexOfLastPost)
    }

    var howManyPages;
    if(todos.length !== 0){
        howManyPages = Math.ceil(todos.length/postsPerPage)
    }

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
                        <tr key={res.id} >
                            <td><Link to={`/todo-details/${res.id}`}>{res.id}</Link></td>
                            <td>{res.taskTitle}</td>
                            <td>{res.taskDate}</td>
                            <td>
                                <Link to={`/edit-todo/${res.id}`} className='btn-edit'><i class="fa fa-pencil" aria-hidden="true"></i></Link>
                                {/* <button to='/' className='btn-trash' onClick={(e)=> dispatch(deleteTodos(res.id))}><i class="fa fa-trash" aria-hidden="true"></i></button> */}
                                {<button className='btn-trash' onClick={(e)=> deleteTodo(res.id)}><i class="fa fa-trash" aria-hidden="true"></i></button>}


                            </td>
                        </tr>

                    ))
                }
            </tbody>
            </Table>
            <Pagination pages = {howManyPages} setCurrentPage={setCurrentPage} />

            {/* <div>{errorReporting}</div>
            <div>{isPending}</div> */}
        </div>
        </div>
     );
}
 
export default Todos;