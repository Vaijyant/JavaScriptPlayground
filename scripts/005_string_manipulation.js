let str = "This is a valid string.";

console.log(str.length);
console.log(str[0]); //! Doesn't work on IE7
console.log(str.charAt(0));

str[0] = "!";  //!Doesn't work
console.log(str);
