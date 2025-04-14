/* alert("HolaMundo");
let mes=["enero", "febrero", "marzo" ];
for (let i=0; i< mes.length; i++) {
    alert(mes[i]);
}


var valores = [true, 5, false, "hola","adios", 2];

let max=0;
let palabra = "";
for (i=0 ; i<valores.length ; i++) {
    if (typeof valores[i] === "string") {
        let long = valores[i].length; 
        if (long > max) {
            max = long;
            palabra = valores[i];
        } 
    }

}
alert("El texto mayor es " + palabra)
alert(valores[0] || valores[2])
alert(valores[0] && valores[2]) 
alert(valores[1]+valores[5])
alert(valores[1]-valores[5])
alert(valores[1]/valores[5])
alert(valores[1]*valores[5])
alert(valores[1]**valores[5])

let num= 5;
let factorial=1
for (i=1; i<=num; i++) {
    factorial= factorial * i;
}
alert(factorial)

var frase = "aaa";
function check(frase) {
    if (frase === frase.toUpperCase()) {
        alert ("El texto ta en mayus");
    } else if (frase === frase.toLowerCase()) {
        alert ("El texto ta en minus");
    } else {
        alert ("El texto ta en los dos");
    }
}

check(frase)
*/