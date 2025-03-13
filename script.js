let count = 0;

function increment() {
    let result = document.getElementById("count");
    count++; 
    result.textContent = "Your Current Count is: " + count; 
    showclear();
}

document.getElementById("Incrementbtn").addEventListener("click", increment);




function decrement() {
    let result = document.getElementById("count");
    count--; 
    result.textContent = "Your Current Count is: " + count; 
    showclear();
    errorshow();
}

document.getElementById("decrementbtn").addEventListener("click", decrement);


function clear() {
    let result = document.getElementById("count");
    count = 0; 
    result.textContent = "Your Current Count is: " + count;
    
}



function hideclear(){
    if (count===0){
      document.getElementById("Clearbtn").style.display="none"
    }
}

document.getElementById("Clearbtn").addEventListener("click", clear,);
document.getElementById("Clearbtn").addEventListener("click", hideclear,);

function showclear(){
    if (count>0){
      document.getElementById("Clearbtn").style.display="inline"
    }
}

function errorshow(){
    function errorshow() {
        if (count === 0) {
            document.getElementById("error").style.display = "inline";  
        } else {
            document.getElementById("error").style.display = "none";
    }
    
    }
}