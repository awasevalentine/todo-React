import useFetchTodo from '../../Services/get-todo'

const TodoDetails = ({match}) => {

    const { todoId } = match.params;
    const {todo: todos, isPending, errorReporting } = useFetchTodo('http://localhost:8081/task')

    const renderedFoundTodo = todos.map((todo) =>{
    let found = todo.id == todoId
    return (
    <article className="todo-detail" key={todo.id}>
        <h2>{found.taskTitle}</h2>
        <p>{found.taskDescription}</p>
    </article>
    )
})
    
    return ( 
        <section>
            {renderedFoundTodo && 
            <div className="todo-content">{renderedFoundTodo}</div>
            }
        </section>
     );
}
 
export default TodoDetails;