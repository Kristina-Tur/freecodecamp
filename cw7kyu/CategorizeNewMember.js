function openOrSenior(data){
    return data.map(el => el[0] >= 55 &&  el[1] > 7 ? 'Senior' : 'Open')
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))