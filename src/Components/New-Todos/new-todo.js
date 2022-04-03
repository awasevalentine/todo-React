import { Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Container, Form, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './new-todos.css'

const NewTodo = () => {
    console.log("even this one")
    const [taskTitle, setTaskTitle ] = useState('')
    const [taskDate, setTaskDate ] = useState('')
    const [taskDescription, setTaskDescription ] = useState('')
    const [isPending, setPending] = useState(false);
    const [errorReport, setErorrReport ] = useState(null)
    const route = useNavigate();




    const formSubmit =(e) => {
        e.preventDefault();
        setPending(true)
        const url = 'http://localhost:8081/task';
        let payload = {
            taskTitle, taskDate, taskDescription
        }
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload),
        })
        .then((res) =>{
            if(res.ok){
                setPending(false);
                route('/todos')
            }
        })
        .catch((err) => {
            if(err){
                setPending(false);
                setErorrReport(err.message)
            }
        })
    }

    function ErrorAlert(e){
        if(e){
            return (
                <Alert variant="danger" onClose={()=>setErorrReport(false)} dismissible>
                    <p>
                        {errorReport}
                    </p>
                </Alert>
            )
        }
    }

    return ( 
        <div className="new-todo-wrapper">
            <div className="alert-wrapper">
                {
                errorReport && ErrorAlert(errorReport)
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
                                        <Form.Control className="w-2" as="textArea" 
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