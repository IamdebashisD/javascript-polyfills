Array.prototype.myMap = function (callback) {
    if (typeof callback !== "function"){
        throw new TypeError(callback + " is not a function")
    }
    const result = new Array(this.length)
    for (let i = 0; i < this.length; i++) {
        result[i] = callback(this[i], i , this)
    }
    return result
}

const arr = [1, 2, 3, 4, 5]
const result = arr.myMap( v => v*10)  
console.log(result)  // [ 10, 20, 30, 40, 50 ]

