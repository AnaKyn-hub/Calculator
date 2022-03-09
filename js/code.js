const div = document.getElementById("del");

function deleted(){
    //alert("apagou");
    div.style.animation = "";
    setTimeout(() => div.style.animation = "delAnim 0.2s reverse");
}