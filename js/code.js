const del = document.getElementById("del");
var opVerif = false;

var a;
var b;
var dado;

function deleted(){
    del.style.animation = "";
    setTimeout(() => del.style.animation = "delAnim 0.2s reverse");

    document.getElementById('value').innerHTML = "";
}

function insert(num){
    if(opVerif){
        document.getElementById('value').innerHTML = "";
        opVerif = false;
    }

    let val = document.getElementById("value").innerHTML;
    document.getElementById('value').innerHTML = val + num;
}

function operations(symb){
    const op = document.getElementById('value');
    op.style.animation = "";
    setTimeout(() => op.style.animation = "opAnim 0.2s");

    opVerif = true;

    if (a == undefined) {
        a = parseInt(document.getElementById('value').innerHTML);
        dado = symb;
    }

    else{
        b = parseInt(document.getElementById('value').innerHTML);
        calculate(dado);
        dado = symb;
    }
}

function calculate(x){
    switch (x) {
        case '+': 
            a = a + b;
            console.log("SOMOOOOOO");
        break;
    
        case '-':
            a = a - b;
            console.log("SUBTRAIIIIIIU");
        break;
    
        case '*':
            a = a * b;
            console.log("MULTIPLICOOOOOO");
        break;
    
        case '/':
            a = a / b;
            console.log("DIVIDIIIIIU");
        break;
    }
}

function resultado(){
    b = parseInt(document.getElementById('value').innerHTML);
    calculate(dado);

    document.getElementById('value').innerHTML = a;
    opVerif = true;

    if(a == undefined){
        document.getElementById('value').innerHTML = "";
    }
}

//ele não deleta totalmente vai somando
//aviso para fazer uma operação por vez, ele opera na ordem que é escrito
//adicionar um histórico da operação anterior
//resolver bugs preenche com 0, etc
//adicionar o ponto é uma vez