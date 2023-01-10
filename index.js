///////////Variables/////////////
let output=document.getElementById('out');
















///////////Functions/////////////

function display(value){
    output.value+=value;
}

function effacer(){
    output.value="";
}
function calculate(){
    output.value= eval(output.value);
}