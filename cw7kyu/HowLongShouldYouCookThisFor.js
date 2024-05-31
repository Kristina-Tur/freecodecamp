function cookingTime(neededPower, minutes, seconds, power) {
    let nPow = parseInt(neededPower.slice(0, -1))
    let pow = parseInt(power.slice(0, -1))
    let time = nPow * (minutes * 60 + seconds) / pow //97.10526315789474
    let min = Math.floor(time / 60) //1.62 //1
    let sec = time % 60

    // Если есть дробная часть секунд, округлим в большую сторону
    if (sec - Math.floor(sec) > 0) {
        sec = Math.ceil(sec);
    } else {
        sec = Math.round(sec);
    }

    // Корректное преобразование секунд в минуты
    if (sec >= 60) {
        min += Math.floor(sec / 60);
        sec = sec % 60;
    }
    return min + ' minutes ' + sec + ' seconds'
}

console.log(cookingTime('450W', 3, 25, '950W'))