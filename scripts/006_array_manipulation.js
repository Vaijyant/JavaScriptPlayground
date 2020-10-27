const arr = [1, 2, 3, 4, "Vaijyant", ["Nest", 12.3]];

console.log(arr);
console.log(arr.length);
console.log(arr[5][0]);

arr[5][0] = "Modified";
console.log(arr);

arr.push("New Item");
console.log(arr);

let item = arr.pop();
console.log(arr);
console.log( " |-> " + item)

let shift_item = arr.shift();
console.log(arr);
console.log( " |-> " + shift_item)

let unshift_item = arr.unshift("One");
console.log(unshift_item);
console.log(arr);