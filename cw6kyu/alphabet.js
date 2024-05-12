/*вернуть тру, если строка явл панграмой, т.е. все буквы алфавита в ней встречаются*/
function isPangram(string){
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let chars = {}

    let str = string.toLowerCase()
    // Добавляем буквы из строки в объект
    for (let i = 0; i< str.length; i++){
        let char = str[i]
        if(alphabet.includes(char)){
            chars[char] = true;
        }
    }

    // Проверяем, содержится ли каждая буква алфавита в объекте
    for (let i = 0; i < alphabet.length; i++){
        if(!chars[alphabet[i]]){
            return false
        }
    }
    return true
}

console.log(isPangram("This is not a pangram." ))
console.log(isPangram("The quick brown fox jumps over the lazy dog" ))