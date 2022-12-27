export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
    let incremento;

    switch(marca){
        case "1":
            incremento = 1.3;
            break;
        case "2" :
            incremento = 1.15;
            break;
        case "3" :
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}

export function ObtenerMarca(marca){
    let marcaFinal;
    switch(marca){
        case "1":
            marcaFinal = "Europeo";
            break;
        case "2":
            marcaFinal = "Americano";
            break;
        case "3":
            marcaFinal = "Asíatico";
            break;
        default:
            break;
    }

    return marcaFinal;
}

export function calcularPlan(plan) {
    return plan === "1" ? 1.2 : 1.5;
}

export function formatearDinero (cantidad){
    return cantidad.toLocaleString('en-US',{
        style: 'currency',
        currency: 'USD'
    })
}