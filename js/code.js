var val = document.getElementById("numb");
const div = document.getElementById("del");

function deleted(){
    div.style.animation = "";
    setTimeout(() => div.style.animation = "delAnim 0.2s linear");
    val.innerHTML = null;
}

var one = document.getElementById("b1");
var two = document.getElementById("b2");
var three = document.getElementById("b3");
var plus = document.getElementById("bplus");

one.onclick = function(){
    val.append("1");
}

two.onclick = function(){
    val.append("2");
}

three.onclick = function(){
    val.append("3");
}

plus.onclick = function(){
    val.append("+");
}
