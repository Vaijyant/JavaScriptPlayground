setTimeout(function() {
    console.log("First");
}, 5000);
setTimeout(function() {
    console.log("Second");
}, 3000);

console.log(this);