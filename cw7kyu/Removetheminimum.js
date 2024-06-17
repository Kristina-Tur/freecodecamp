function removeSmallest(numbers) {
    let newNumbers = [...numbers]
    let minValue = Math.min(...newNumbers)
    let index = newNumbers.indexOf(minValue)
    newNumbers.splice(index, 1)
    return newNumbers
}

console.log(removeSmallest([1, 2, 3, 4, 5]))