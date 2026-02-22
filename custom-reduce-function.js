// Custom Reduce Function
Array.prototype.myReduce = function (callbackFn, initial) {
    let accumulator = initial

    for (let i = 0; i < this.length; i++) {
        accumulator = callbackFn(accumulator, this[i], i, this)
    }
    return accumulator
}


const myArr = [1, 2, 3, 4, 5]
const sum = myArr.myReduce((acc, arr) => acc + arr, 0)
console.log(sum)


const myobj = [
    { dish: "mutton biryani", price: 100, spicy: true, qty: 1 },
    { dish: "butter naan", price: 150, spicy: true, qty: 2 },
    { dish: "plain naan", price: 100, spicy: false, qty: 1 },
    { dish: "polaao", price: 80, spicy: false, qty: 3 },
]
const totalSpentMoney = myobj
    .filter(arr => arr.spicy)
    .myReduce((acc, arr) => acc + arr.price * arr.qty, 0)

console.log(totalSpentMoney) // 400