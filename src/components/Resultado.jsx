import { useCallback, useRef } from "react";
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from "../constants";
import { formatearDinero } from "../helpers";

const Resultado = () => {

    const {resultado, datos} = useCotizador();

    const {marca, plan, year} = datos;

    const yearRef= useRef(year);

    const [ nombreMarca ] = useCallback(MARCAS.filter(m => m.id === parseInt(marca)), [resultado]);

    const [ nombrePlan ] = useCallback(PLANES.filter(p => p.id === parseInt(plan)), [resultado]);

    if(resultado === 0) return null;
    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-700 font-black text-3xl">Resumen</h2>

            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {nombreMarca.nombre}
            </p>    
            <p className="my-2">
                <span className="font-bold">Año del Auto: </span>
                {yearRef.current}
            </p>    
            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {nombrePlan.nombre}
            </p>    
            <p className="my-2 text-3xl">
                <span className="font-bold">Total de Cotización: </span>
                {formatearDinero(Number(resultado))}
            </p>    
        </div>
    )
}

export default Resultado
