
function promedio(){
    let dataA = document.getElementById("dataA").value;
    let dataS = document.getElementById("dataS").value;
    if (dataA || dataS) {
    
        let arrayA = dataA.split(',');
        let arrayS = dataS.split(',');
        let contA = 0;
        arrayA.forEach(e => {
            contA += parseInt(e);
        });
    
        let promA = Math.round(contA/arrayA.length);
    
        let contS = 0;
        arrayS.forEach(e => {
            contS += parseInt(e);
        });
    
        let promS = Math.round(contS/arrayS.length);
    
        document.getElementById("A").value = promA;
        document.getElementById("S").value = promS;
    }else{
        alert("No hay datos")
    }
}


function solucion(){
    let a = parseInt(document.getElementById("A").value);
    let s = parseInt(document.getElementById("S").value);
    if(a!=0 && a>0 && s>0 && s!=0){
        
        let lq = Math.round(((a**2)/((2*s)*(s-a))).toFixed(3));
        let wq = (a/((2*s)*(s-a))).toFixed(3);
        let ls = Math.round(((a*(2*s-a))/((2*s)*(s-a))).toFixed(3));
        let ws = (((2*s)-a)/((2*s)*(s-a))).toFixed(3);
        let u = (a/s).toFixed(3);
        
        document.getElementById("Lq").innerHTML = `Longitud promedio de la línea(Lq) = ${lq}`;
        document.getElementById("Wq").innerHTML = `Tiempo de espera promedio(Wq) =  ${wq}`;
        document.getElementById("Ls").innerHTML = `Longitud promedio de la línea del sistema(Ls) = ${ls}`;
        document.getElementById("Ws").innerHTML = `Tiempo de espera promedio del sistema(Ws) = ${ws}`;
        document.getElementById("U").innerHTML = `Utilización de la instalación(U) = ${u}`;
    }else{
        alert('No es válido')
    }
}