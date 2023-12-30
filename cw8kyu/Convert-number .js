// DESCRIPTION:
// Convert number to reversed array of digits (Преобразовать число в перевернутый массив цифр)
// Given a random non - negative number, you have to return the digits of this number within an array in reverse order.

//   Example(Input => Output):
// 35231 => [1, 3, 2, 5, 3]
// 0 => [0]

function digitize(n) {
  return n.toString().split("").reverse().map(Number);  //число преобразую в строку. split("") - преобразую в массив чисел, где каждое число - отдельный элемент. reverse() - в обратном порядке, map(Number) - обратно со строки в числа
}