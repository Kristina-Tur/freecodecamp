function sumDigPow(a, b) {
    let arr = []
    for (let i = a; i < b; i++) {
        let arr2 = String(i).split('')
        if (i === arr2.reduce(function (acc, item, index) {
            return acc + item ** (index + 1)}, 0))
            arr.push(i)
    }
    return arr
}

console.log(sumDigPow(1, 100))