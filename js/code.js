var val = document.getElementById("value");
const div = document.getElementById("del");

function deleted(){
    div.style.animation = "";
    setTimeout(() => div.style.animation = "delAnim 0.2s reverse");
}

function test(){
    val.innerHTML = "1+1";
}

test();
