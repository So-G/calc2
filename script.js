/**const premierNombre = input(parseInt("Entrer une première valeur"));
const operator = ("Entrer l'opérateur");
const secondNombre = input(parseInt("Entrer une deuxième valeur"));
*/

const btnCalcul = document.getElementById("btnCalcul");

btnCalcul.addEventListener('click', event => {
    
    const firstNumber = parseInt(document.getElementById('valeur1').value);
    const secondNumber = parseInt(document.getElementById('valeur2').value);
    const operator = document.getElementById('operator').value;

    let resultat ="Invalid Operator";

    if(operator === "+"){
        resultat = premierNombre + secondNombre;
    } else if(operator === "-"){
        resultat = premierNombre - secondNombre;
    } else if(operator === "*"){
        resultat = premierNombre * secondNombre;
    } else if(operator === "/"){
        resultat = premierNombre / secondNombre;
    }
    
    console.log(resultat);
        
});



