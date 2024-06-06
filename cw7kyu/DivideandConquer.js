function divCon(x){
    let sumNum = 0
    let sumStr = 0
    for(let i = 0; i < x.length; i++){
        if(typeof x[i] === "number"){
            sumNum += x[i]
        }else{
            sumStr += parseFloat(x[i])
        }
    }
    return sumNum - sumStr
}
console.log(divCon([9, 3, '7', '3']));