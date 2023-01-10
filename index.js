///////////Variables/////////////
let output=document.getElementById('out');
let outputLength;
let current,previous;
let operations=['+','-','*','/'];















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
    checkSyntax();
}
function checkSyntax(){
    if(operations.includes(previous) && operations.includes(current)){
        if(previous==current){
            removeChar();
        }else{
            output.value=output.value.slice(0,outputLength-2)+output.value.slice(outputLength-1,outputLength);
        }
    }
}

function removeChar(){
    output.value=output.value.substring(0,outputLength-1);
}