function add(x1,x2) {
return x1+x2;
}

function substract(x1,x2) {
return x1-x2;
}

function multiply(x1,x2) {
return x1*x2;
}

function divide(x1,x2) {
    if(x2 == 0){
        console.log ("No se puede dvidir por 0")
    }
    else{
        return x1/x2;
    }
}

console.log (add (1,2));
console.log (substract (1,2));
console.log (multiply (1,2));
console.log (divide (1,2));


/**************en este archivo puedo 
visualizar operaciones comunes de suma,resta,
 multipllcacion y division a traves de la consola *********/