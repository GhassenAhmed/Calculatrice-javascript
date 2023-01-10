///////////Variables/////////////
let output=document.getElementById('out');
let outputLength;















///////////Functions/////////////

function display(value){
    output.value+=value;
    outputLength=output.value.length;
    for(let i=0;i<outputLength;i++){
        for(let j=i+1;j<outputLength;j++){
            if
        }
    }
    // console.log(outputLength);
}

function effacer(){
    output.value="";
}
function calculate(){
    output.value= eval(output.value);
}