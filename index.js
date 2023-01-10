///////////Variables/////////////
let output=document.getElementById('out');
let outputLength;
let current,previous;















///////////Functions/////////////

function display(value){
    output.value+=value;
    outputLength=output.value.length;
    current=value;
    getPrevious();
}

function effacer(){
    output.value="";
}
function calculate(){
    output.value= eval(output.value);
}
function getPrevious(){
    previous=output.value.substring(outputLength-2,outputLength-1);
}