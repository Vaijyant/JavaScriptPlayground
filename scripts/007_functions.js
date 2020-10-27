/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function add(a, b) {
    x = "Some value x";
    var y = "Some value y";

    if(true) {
        let nest_x = "Nest x";
        var nest_y = "Nest y";
    }

    //console.log(nest_x);!error nest_x is block scoped
    console.log(nest_y);

    return a + b;
}

x = 123;
console.log(add(3, 5));
console.log(x);
// console.log(y); not defined