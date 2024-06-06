function solution(string) {
    let arr = string.split('')
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i].toUpperCase()){
            arr[i] = ' ' + arr[i].toUpperCase()
        }
    }
return arr.join('')
}


console.log(solution("camelCasing"));