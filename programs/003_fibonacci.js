function fibonacci(n) {
    
    if(n<0 || (Math.ceil(n) - Math.floor(n)) === 1) return "Invalid!";
    if(n==0) return [];
    if(n==1) return [1];
    
    let fibList = [1, 1];
    for(let i=2; i<n; i++) {
        fibList.push(fibList[i-1] + fibList[i-2]);
    }
    return fibList;

}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5.5));
