    let peso;
    let altura;
    let imc;
    let resultado


    function calcular(event){
        event.preventDefault();
        
        peso = document.getElementById('peso').value;
        altura = document.getElementById('altura').value;

        imc = peso / (altura * altura);
        resultado = document.getElementById('resultado');

        if(imc < 17){
            resultado.innerHTML = '<br/> Seu resultado foi :' + imc.toFixed(2) + '<br/> Cuidado você esta abaixo do peso!'
        }else if (imc >17 && imc <= 18.49){
            resultado.innerHTML = '<br/> Seu resultado foi :' + imc.toFixed(2) + '<br/> Você esta abaixo do peso!'
        }else if (imc >18.5 && imc <= 24.99){
            resultado.innerHTML = '<br/> Seu resultado foi :' + imc.toFixed(2) + '<br/> Você esta no peso ideal!'
        }else if (imc > 25 && imc <= 29.99){
            resultado.innerHTML = '<br/> Seu resultado foi :' + iimc.toFixed(2) + '<br/> Você esta acima do peso!'
        }else if (imc >= 30){
            resultado.innerHTML = '<br/> Seu resultado foi :' + imc.toFixed(2) + '<br/> Cuidado obesidade!'
        }

        document.getElementById('peso').value='';
        document.getElementById('altura').value='';
    }

