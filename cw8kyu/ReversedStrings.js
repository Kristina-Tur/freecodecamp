// DESCRIPTION:
// Перевернутая строка
// Complete the solution so that it reverses the string passed into it.

// 'world'  => 'dlrow'
// 'word'   => 'drow'

function solution(str) {
  return str.split("").reverse().join(""); //слово преобразую в массив, делаю обратное направление и преобразую в строку
}

//или

function reverseString(str) {
  let newString = "";
  /* Стартовой точкой для цикла будет (str.length - 1), что соответствует последнему символу строки — "o"
     До тех пор, пока i больше или равно 0, цикл будет работать Мы уменьшаем i после каждой итерации */
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString
}
reverseString("Hello");


// Переворачиваем строку с помощью рекурсии

// Для этого решения мы будем использовать два метода: метод String.prototype.substr() и метод String.prototype.charAt().

// Метод substr() возвращает указанное количество символов из строки, начиная с указанной позиции.

"hello".substr(1); // "ello"

// Метод charAt() возвращает указанный символ из строки.

"hello".charAt(0); // «h" 

// Глубина рекурсии равна длине строки.Этот способ решения будет не самым удобным, если строка будет очень длинной.

function reverseString(str) {
  if (str === "") // Завершение рекурсии
    return "";

  else
    return reverseString(str.substr(1)) + str.charAt(0);

  /* Первая часть метода рекурсии. Вы должны помнить, что у вас не будет одного вызова функции, у вас будет несколько вложен           ных вызовов. 
 Each call: str === "?"                         reverseString(str.subst(1)) + str.charAt(0)
 1-й вызов – reverseString("Hello»)   вернет   reverseString("ello»)           + "h"
 2-й вызов – reverseString("ello")   вернет   reverseString("llo")            + "e"
 3-й вызов – reverseString("llo")    вернет   reverseString("lo")             + "l"
 4-й вызов – reverseString("lo")     вернет   reverseString("o")              + "l"
 5-й вызов – reverseString("o")      вернет   reverseString("")               + "o" 

Вторая часть метода рекурсии. Метод попадает в условие if и наиболее вложенный вызов немедленно возвращается.
 
 5-й вызов вернет reverseString("") + "o" = "o"
 4-й вызов вернет reverseString("o") + "l" = "o" + "l"
 3-й вызов вернет reverseString("lo") + "l" = "o" + "l" + "l"
 2-й вызов вернет reverserString("llo") + "e" = "o" + "l" + "l" + "e"
 1-й вызов вернет reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" */

}

reverseString("hello");