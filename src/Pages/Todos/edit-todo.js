import { useEffect, useState } from "react"
import { Container, Form, Row, Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TodoService from "../../Services/todosService";
import { toast } from 'react-toastify'
import { reset } from "../../Redux/todoSlice";
import { ErrorAlert } from "../../Components/ErrorHandling/ErrorAlert";
import { TodoToast } from "../../Components/Toast/toast";


const EditTodo = () => {
    const { updateTodos, getTodos } = TodoService
    const {todoId} = useParams()
    const {updateStatus, error, todos } = useSelector(state => state.todos)
    const found = todos.find((res)=> res.id === Number(todoId))
    // const updateTodoStatus = useSelector(state => state.todos.updateTodoStatus)
    const [taskTitle, setTaskTitle ] = useState()
    const [taskDescription, setTaskDescription ] = useState()
    const [isPending, setIsPending ] = useState(false)
    const dispatch = useDispatch()
    const history = useNavigate()



    useEffect(()=>{
        if(updateStatus === 'idle'){
            // dispatch(getTodos())
            setTaskTitle(found.taskTitle)
            setTaskDescription(found.taskDescription)
        }
        if(updateStatus === 'loading'){
            setIsPending(true)
        }
        if(updateStatus === 'success'){
            setIsPending(false)
            toast.success('Update successful!')
            setTimeout(()=>{
                history(-1)
                dispatch(reset())
            },1000)
        }
        if(updateStatus === 'failed'){
            setIsPending(false)
        }
    },[todos,updateStatus, dispatch])



    function updateTodo(e){
        e.preventDefault()
        const payload = {
            todoId,
            taskTitle,
            taskDescription
        }
        dispatch(updateTodos(payload))
    }

    return ( 
        <section className="edit-todo-wrapper">
            <div className="toast_wrapper">
                <TodoToast />
            </div>
            <div className="error_wrapper">
                {error && <ErrorAlert error={error} />}
            </div>
                <form onSubmit={updateTodo}>
                    <Container className="form_input_wrapper">
                        <Row>
                            <Col sm={12} md={6}>
                                <div className="title form-field">
                                    <label>Task Title</label>
                                    <Form.Control className="w-2" type="text" 
                                    placeholder="Enter title of the task" required
                                    value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}
                                     />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={12}>
                                    <div className="description form-field">
                                        <label>Task Description</label>
                                        <Form.Control className="w-2" as="textarea" 
                                        rows={3} value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}
                                        />
                                    </div>
                                </Col>
                        </Row>
                    </Container>
                    <div className="btn-wrapper">
                        <button type="submit" className="btn-submit">
                            {isPending &&<Spinner as="span" animation="border" size="sm" aria-hidden="true" className="spinner" />}
                            Update
                        </button>
                    </div>
                </form>
        </section>
     );
}
 
export default EditTodo;