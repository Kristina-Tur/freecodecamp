function findUniq(arr) {
    const unique = arr.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el))
    //благодаря indexOf нам возвращается индекс элемента массива и сравниваем вхождение данного элемента, например 1 индекс
    // будет 0 и 5, 0 !== 5, поэтому будет false, а filter пропускает в новый массив только есди true
    //а у 2 будет индекс 0 и 0, поэтому получится [2]
    // и проверяем если длина массива больше 0, то возвращаем этот элемент
    return unique.length > 0 ? unique[0] : -1
}

function findUniqObj(arr) {
    const obj = {}
    for (let arrElement of arr) {
        obj[arrElement] = (obj[arrElement] || 0) + 1
    }
    for (let arrElement of arr) {
        if(obj[arrElement] === 1){
            return arrElement
        }
    }

    return -1

}

findUniqObj([1, 1, 1, 2, 1, 1])