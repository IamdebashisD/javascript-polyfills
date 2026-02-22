Array.prototype.myForEach = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function")
    }
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const myarr = [1, 2, 3, 4, 5, 6]
myarr.myForEach(v => console.log(v))

/* -------output-------

1
2
3
4
5
6

*/