import axios from "axios";
import { useEffect, useState } from "react";

const useFetchTodo = (url) => {
    // console.log("Does it get here?")

    const [ todo, setTodo] = useState([]);
    const [ isPending, setIsPending ] = useState(true);
    const [ erorrReport, setErrorReport ] = useState({});

    useEffect(() => {
        console.log("Url ", url)

        axios.get(url)
        .then(res => {
            let todo = res.data;
            setTodo(todo)
            
            setErrorReport(null)
            setIsPending(false);
        })
        .catch((err)=>{
            setErrorReport(err.message)
            setIsPending(false)
            console.log("Error ", err.message)
        })
    },[]);

    return {todo, erorrReport, isPending}
}
 
export default useFetchTodo;