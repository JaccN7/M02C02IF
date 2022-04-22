//Comprobar si un número es par o inpar
function parImpar() {
    var numero = parseInt(document.getElementById('numero').value);
    if(numero%2==0){
        alert(numero + " es par")
    }else{
        alert(numero +" es impar")
    }
}

// Comprobar si alguien puede jubilarse en Chile considerando sexo y edad
function jubilar() {
    var sexo = document.getElementById('sexo').value;
    var edad = parseInt(document.getElementById('edad').value);
    if(sexo=="Masculino" && edad >= 65 || sexo=="Femenino" && edad>=60 ){
        alert("Felicidades ya puedes jubilarte!");
    }else{
        alert("Aún no puedes jubilarte");
    }

}