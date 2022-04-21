import { Alert } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { reset } from "../../Redux/todoSlice"


export const ErrorAlert = ({error}) => {

    const dispatch = useDispatch()

    return (
        <Alert variant="danger" onClose={()=>dispatch(reset())} dismissible>
            <p>
                {error}
            </p>
        </Alert>
    )
}