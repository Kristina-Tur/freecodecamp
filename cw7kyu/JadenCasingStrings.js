String.prototype.toJadenCase = function () {
  let arr = this.split(' ').map(el => el[0].toUpperCase() + el.slice(1))
  return arr.join(' ')
};
const str = "How can mirrors be real if our eyes aren't real"
const jadenStr = str.toJadenCase()
console.log(jadenStr);