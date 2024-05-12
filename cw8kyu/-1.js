function invert(array) {
    let arr = []
    for(let i = 0; i < array.length; i++){
        arr.push(array[i] * (-1))
    }
    return arr
}

console.log(invert([-1,-2,-3,-4,-5]))