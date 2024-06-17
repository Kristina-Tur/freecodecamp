function digPow(n, p){
    let arr = n.toString().split('').map(Number)
    let onePow = Math.pow(arr[0], p)
    let newArr = [onePow]

    for(let i = 1; i < arr.length; i++){
        let pow = Math.pow(arr[i], p+i)
        newArr.push(pow)
    }
    let sum = newArr.reduce((accum, cur) => accum + cur,0)
    let result = sum / n
    if(result % 1 === 0){
        return result
    }else {
        return -1
    }
}

console.log(digPow(46288, 3))
/*89 --> 8¹ + 9² = 89 * 1
695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51*/