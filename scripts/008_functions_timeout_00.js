function myTimer() {
    console.log("In myTimer()");
    
    function nestFunction() {
        console.log("First line of nestFunction()");
        setTimeout(function() {
            console.log("Hello");
        }, 3000);
        console.log("Vaijyant");
    }

    myTimer.nestFunction = nestFunction;
    
    console.log("Last line of myTimer()");
    return "I have returned the value";
}

console.log("Hi");
let returnValue = myTimer();
console.log(returnValue);
myTimer.nestFunction();
