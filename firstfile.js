console.log("hello guys")

console.log(printit(test, test2, test3))

var test = 2

console.log(printit(test, test2, test3))

var test2 = '2'

console.log(test == test2)

console.log(test === test2)


function printit(par1, par2, par3){
    console.log('this is the first param ' + par1 + ' followed by these..'+ par2 + ', '+ par3)
}

var test3 = 3

//global scope
//local scope
var random = 25426;
//console.log(private);
var private = 100;
function Print(myVal) {
    console.log(private);
    var private = 101; //this is local to Print can't be accessed outside
    console.log(random);
    // (function () {
    //   console.log(private)  
    // })()
}
//console.log(private);
Print(2500);