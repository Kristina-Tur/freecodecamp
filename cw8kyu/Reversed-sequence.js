const reverseSeq = n => {
    let arr = [n]
    for(let i = 1; i < n; i++){
        arr.push(n-i)
    }
    return arr;
};