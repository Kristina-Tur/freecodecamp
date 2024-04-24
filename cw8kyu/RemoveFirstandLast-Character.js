// DESCRIPTION:
//Удалить первый и последний символ
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.You don't have to worry with strings with less than two characters.
//Это довольно просто. Ваша цель — создать функцию, которая удаляет первый и последний символы строки. Вам дан один параметр — исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов.


function removeChar(str) {
  return str.slice(1, -1); //извлекается от первого до предпослднего элемента
}
//arr.slice([begin[, end]])
// begin Необязательный
// Индекс(счёт начинается с нуля), по которому начинать извлечение.

// Если индекс отрицательный, begin указывает смещение от конца последовательности.Вызов slice(-2) извлечёт два последних элемента последовательности.

// Если begin не определён, slice() начинает работать с индекса 0.

// Если begin больше длины последовательности вернётся пустой массив.

// end Необязательный
// Индекс(счёт начинается с нуля), по которому заканчивать извлечение.Метод slice() извлекает элементы с индексом меньше end.

// Вызов slice(1, 4) извлечёт элементы со второго по четвёртый(элементы по индексам 1, 2 и 3).

// Если индекс отрицательный, end указывает смещение от конца последовательности.Вызов slice(2, -1) извлечёт из последовательности элементы начиная с третьего элемента с начала и заканчивая вторым с конца.

// Если end >= array.length или end опущен, slice() извлекает все элементы до конца последовательности(arr.length).

function removeChar(str) {
  //You got this!
  let newStr = ""
  for (i = 0; i < str.length; i++) {
    if (i == 0) {
      newStr += ""
    } else if (i > 0 && i < (str.length - 1)) {
      newStr += str[i]
    } else if (i == str.length) {
      newStr += ""
    }
  }
  return newStr
};