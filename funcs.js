function printSomething(par){
    console.log('my name is '+ par)
}

var t1 = 'mueen'
var t2 = 'hamed'

function callback(fn, a, b){
    var name = a + " " + b
    fn(name)
}

callback(printSomething,'mueen','hamed')