function findShort(s){
    const words = s.split(' ');
    let shortestLength = words[0].length;

    for (const word of words) {
        if (word.length < shortestLength) {
            shortestLength = word.length;
        }
    }

    return shortestLength;
}