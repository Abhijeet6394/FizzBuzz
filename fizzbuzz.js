let output=document.getElementById('op');
let button=document.getElementById('btn');
button.addEventListener('click',fn);
function fn(){
    let valued=document.getElementById('value');
    let num=valued.value;
    for(let i=1;i<=num;i++){
        if(i%15==0){
            output.innerHTML +="<br/>FizzBuzz"
        }
        else if(i%3==0){
            output.innerHTML +="<br/>Fizz"
        }
        else if(i%5==0){
            output.innerHTML +="<br/>Buzz"
        }
        else
           output.innerHTML +="<br/>" + i;
    }
}
