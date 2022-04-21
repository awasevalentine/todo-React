// import { createSelector } from "@reduxjs/toolkit";
// import { useEffect, useState } from "react"
// import { Container, Form, Row, Col, Spinner } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import TodoService from "../../Services/todosService";


// const EditTodo = () => {
//     const { updateTodos } = TodoService
//     const {todoId} = useParams()
//     const {todoStatus, updateTodoError, todos } = useSelector(state => state.todos)
//     const found = todos.find((res)=> res.id === Number(todoId))
//     const updateTodoStatus = useSelector(state => state.todos.updateTodoStatus)
//     const [taskTitle, setTaskTitle ] = useState(found.taskTitle)
//     const [taskDescription, setTaskDescription ] = useState(found.taskDescription)
//     const dispatch = useDispatch()
//     const history = useNavigate()



//     useEffect(()=>{
//         // if(todoStatus === 'idle'){
//         //     // history('/todos')
//         // dispatch(getTodos())

//         // }
//     },[todos,updateTodoStatus, dispatch])

//     function updateTodo(){
//         const payload = {
//             todoId,
//             taskTitle,
//             taskDescription
//         }

//         dispatch(updateTodos)
//         history('/todos')
//     console.log("Update:", updateTodoError)

//     }


//     return ( 
//         <section className="edit-todo-wrapper">
//                 <form onSubmit={updateTodo}>
//                 {/* <form> */}

//                     <Container className="me">
//                         <Row>
//                             <Col sm={12} md={6}>
//                                 <div className="title form-field">
//                                     <label>Task Title</label>
//                                     <Form.Control className="w-2" type="text" 
//                                     placeholder="Enter title of the task" required
//                                     value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}
//                                      />
//                                 </div>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col sm={12} md={12}>
//                                     <div className="description form-field">
//                                         <label>Task Description</label>
//                                         <Form.Control className="w-2" as="textarea" 
//                                         rows={3} value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}
//                                         />
//                                     </div>
//                                 </Col>
//                         </Row>
//                     </Container>
//                     <div className="btn-wrapper">
//                         <button type="submit" className="btn-submit">
//                             {/* {isPending &&<Spinner as="span" animation="border" size="sm" aria-hidden="true" className="spinner" />}Create */}
//                             Update
//                         </button>
//                     </div>
//                 </form>
//         </section>
//      );
// }
 
// export default EditTodo;