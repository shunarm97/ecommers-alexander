import { useNavigate } from "react-router-dom"

const Success = () => {

    const navigate = useNavigate()

    return (
    <div>
        <h1>desde la pag. Success</h1>
        <button onClick={ () => navigate('/shop')}>Back Shop </button>
    </div>
    )
}

export default Success