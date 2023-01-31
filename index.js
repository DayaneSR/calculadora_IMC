function calcularIMC (){
    var nome = document.getElementById('nome').value;
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var imc = parseFloat((peso /(altura * altura)).toFixed(1));    
    
    if(imc < 18.5 && peso < 45.6){
        resultado.innerHTML = (`Olá ${nome},seu é IMC é ${imc}, e está classificado como Magreza`);
    }else if(imc < 24.9 && peso < 61.4){
        resultado.innerHTML = (`Olá ${nome},seu IMC é ${imc}, e está classificado como Normal`);
    }else if(imc < 30 && peso < 73.9){
        resultado.innerHTML = (`Olá ${nome},seu IMC é ${imc}, e está classificado com Sobrepeso`);
    }else{
        resultado.innerHTML = (`Olá ${nome},seu IMC é ${imc}, e está classificado com Obesidade`);
    }
}
