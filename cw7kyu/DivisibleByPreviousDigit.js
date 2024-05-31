/*Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.

    The booleans should always start with false becase there is no digit before the first one.

    Examples
73312        => [false, false, true, false, true]
2026         => [false, true, false, true]
635          => [false, false, false]*/

function divisibleByLast(n) {
    let nToArr = String(n).split('')
    let arr = []
    for(let i = 0; i < nToArr.length; i++){
        if(nToArr[i] % nToArr[i - 1] === 0){
            arr.push(true)
        }else{
            arr.push(false)
        }
    }
    return arr
}

console.log(divisibleByLast(2026))