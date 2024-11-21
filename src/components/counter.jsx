import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";
import { useState } from "react"
const Counter = () => {
    const [counter, setCounter] = useState(0)
    const incrementar = () => {
        if (counter < 10)
            setCounter(counter + 1)
        if (counter === 10) {
            Swal.fire({
                title: "¡Alerta!",
                text: "Has alcanzado el valor máximo permitido.",
                icon: "warning",
                confirmButtonText: "Aceptar",
            });
        }
    }
    const decrementar = () => {
        if (counter > 0)
            setCounter(counter - 1)
    }
    const reiniciar = () => {
        setCounter(0)
    }

    return (
        <div className="container text-center mt-5">
            <div className="p-3 bg-primary text-white rounded shadow">
                <h1>Contador</h1>
            </div>
            <div className="mt-3">
                <div className="p-4 bg-light rounded shadow">
                    <h2 className="display-2 text-primary">{counter}</h2>
                </div>
            </div>
            <div className="mt-5">
                <button className="btn btn-outline-success btn-lg mx-2" onClick={incrementar}>
                    <i className="bi bi-plus-circle"></i> Incrementar
                </button>
                <button className="btn btn-outline-danger btn-lg mx-2" onClick={decrementar}>
                    <i className="bi bi-dash-circle"></i> Decrementar
                </button>
                <button className="btn btn-outline-secondary btn-lg mx-2" onClick={reiniciar}>
                    <i className="bi bi-arrow-clockwise"></i> Reiniciar
                </button>
            </div>
        </div>
    );


}


export default Counter;