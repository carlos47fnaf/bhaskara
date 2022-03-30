function  delta (a,b,c){
    return(b*b)-(4*(a*c))
}
function baskara(a,b,c){
    const valordedelta = delta(a,b,c)
    if(valordedelta<0)
    return ({x1:"inexistente", x2:"inexistente"})
    else{
        const valor_x1=(-b+Math.sqrt(valordedelta)) / (2*a)
        const valor_x2=(-b-Math.sqrt(valordedelta))/(2*a)
        return ({x1: valor_x1 , x2: valor_x2})
    }
  
}
function handleBtnCalcular (){
    const vA = document.getElementById('valorA').value
    const vB = document.getElementById('valorB').value
    const vC = document.getElementById('valorC').value
    const raizes = baskara (vA,vB,vC)
    document.getElementById('resultadox1').innerHTML =raizes .x1
    document.getElementById('resultadox2').innerHTML =raizes .x2
}
document.getElementById(`btncalcular`).addEventListener("click",handleBtnCalcular)