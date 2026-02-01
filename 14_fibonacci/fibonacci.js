const fibonacci = function(arg) {
    let n;
    
    if (typeof arg !== "number"){
        n = parseInt(arg, 10);
    } else {
        n = arg;
    }

    let firstPrev = 1;
    let secondPrev = 0;

    if (n < 0) return "OOPS";
    if (n === 0) return 0;
   
    for (let i = 2; i <= n; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;

};

// Do not edit below this line
module.exports = fibonacci;
