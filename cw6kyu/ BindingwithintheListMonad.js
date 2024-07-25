//Функция, которая принимает массив и функцию, а затем применяет эту функцию к каждому элементу массива

 function bind(array, func) {
    // Применяем функцию к каждому элементу массива
    const mappedArray = array.map(func);

    // Проверяем, что каждый элемент результата является массивом
    for (let i = 0; i < mappedArray.length; i++) {
        if (!Array.isArray(mappedArray[i])) {
            throw new Error("The returned value is not a list!");
        }
    }

    // Уплощаем массив на один уровень
    let result = mappedArray.reduce((acc, value) => acc.concat(value), [])
    return result
}

//bind( [1,2,3], function(a){ return [a+1] } )
// => [2,3,4]
//
 bind( [1,2,3], function(a){ return [[a]] } )
// => [[1],[2],[3]]
//
// bind( [1,2,3], function(a){ return a } )
// => # ERROR! The returned value is not a list!

