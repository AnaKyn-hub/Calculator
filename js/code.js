const del = document.getElementById("del");
var opVerif = false;

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

    switch (symb) {
        case '+': 
            document.getElementById('value').innerHTML + '+';
            console.log("SOMOOOOOO");
        break;

        case '-':
            document.getElementById('value').innerHTML + '-';
            console.log("SUBTRAIIIIIIU");
        break;

        case '*':
            document.getElementById('value').innerHTML + '*';
            console.log("MULTIPLICOOOOOO");
        break;

        case '/':
            document.getElementById('value').innerHTML + '/';
            console.log("DIVIDIIIIIU");
        break;
    }
}

function resultado(){

}