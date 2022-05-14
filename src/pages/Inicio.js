import { useNavigate } from "react-router-dom"

const Inicio = () => {

     const navigate = useNavigate()
    return (
        <div>
            <h1>Bienvenido</h1>
            <button onClick={ () => navigate('/login')}>Login Section</button>
        </div>
    )

}

export default Inicio