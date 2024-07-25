
//Function.prototype.bind это значит для всех забайджэных функций применить переопределение bind. Если законментить, то будет 1

Function.prototype.bind = function(ctx) {
    // Сохраняем исходную функцию
    const originalFunction = this;

    // Создаем новую функцию, которая будет вызывать исходную функцию с зафиксированным контекстом
    const boundFunction = function() {
        return originalFunction.call(ctx);
    };

    // Переопределяем метод bind для новой функции
    boundFunction.bind = function(newCtx) {
        return originalFunction.bind(newCtx);
    };

    return boundFunction;
};

var func = function () {
  return this.prop;
};
var obj1 = {prop: 1},
    obj2 = {prop: 2};

func = func.bind(obj1);
console.log(func()); // Will produce 1

func = func.bind(obj2);
console.log(func()); // Will also produce 1 :(