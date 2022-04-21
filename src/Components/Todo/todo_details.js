import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useFetchTodo from '../../Services/get-todo'
import TodoService from '../../Services/todosService'

const TodoDetails = ({match}) => {

    const { getTodos } = TodoService

    // const { todoId } = match.params;
    const {todoId} = useParams()
    // const {todo: todos, isPending, errorReporting } = useFetchTodo('http://localhost:8081/task')
    const {todos,todoError, todoStatus } = useSelector(state=> state.todos)
    const dispatch = useDispatch()

useEffect(()=>{
    if(todoStatus === 'idle'){
        dispatch(getTodos())
    }
}, [dispatch, todoStatus])

const renderedFoundTodo = todos.find((res)=>{
    return res.id === Number(todoId)
})
    
    return ( 
        <section>
            <article className="todo-detail" key={renderedFoundTodo.id}>
                <h2>{renderedFoundTodo.taskTitle}</h2>
                <p>{renderedFoundTodo.taskDescription}</p>
            </article>
        </section>
     );
}
 
export default TodoDetails;