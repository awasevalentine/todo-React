import { useEffect, useState } from "react";
import { Container, Form, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './css/edit-todo.css'
import { useDispatch, useSelector } from "react-redux";
import TodoService from "../../Services/todosService";
import { reset } from "../../Redux/todoSlice";
import { ErrorAlert } from "../../Components/ErrorHandling/ErrorAlert";
import { TodoToast } from "../../Components/Toast/toast";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'
const NewTodo = () => {

    const { addNewTodos } = TodoService

    const [taskTitle, setTaskTitle ] = useState('')
    const [taskDate, setTaskDate ] = useState('')
    const [taskDescription, setTaskDescription ] = useState('')
    const [isPending, setIsPending ] = useState(false)

    const { addStatus, error } = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const route = useNavigate();


useEffect(()=>{

    if(addStatus === 'failed'){
        setIsPending(false)
    }
    if(addStatus === 'loading'){
        setIsPending(true)
    }

    if(addStatus === 'success'){
        toast.success("Todo was successfully added!")
        setTimeout(()=>{
            route('/todos')
            },1000)
        dispatch(reset())
    }

},[addStatus, dispatch,route])


const formSubmit =(e) => {
        e.preventDefault();
        let payload = {
            taskTitle, taskDate, taskDescription
        }
        dispatch(addNewTodos(payload))
        setTaskDate('')
        setTaskDescription('')
        setTaskTitle('')
    }



    return ( 
        <div className="new-todo-wrapper">
            {<TodoToast />}
            <div className="alert-wrapper">
                {
                    error && <ErrorAlert error={error} />
                }
            </div>
            <h1 className="heading"> Create Your Todos</h1>
            <div className="form-wrapper">
                <form onSubmit={formSubmit}>
                    <Container className="me">
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
                            <Col sm={12} md={6}>
                                <div className="date form-field">
                                    <label> Task Date</label>
                                    <Form.Control className="w-2" type="datetime-local"
                                    value={taskDate} onChange={(e) => setTaskDate(e.target.value)}
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
                            {isPending &&<Spinner as="span" animation="border" size="sm" aria-hidden="true" className="spinner" />}Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default NewTodo;