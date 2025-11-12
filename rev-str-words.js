function revStr(string) {
    let result = ''
    const words = string.split(' ');
    console.log(words)

    for (let i = words.length - 1; i >= 0; i--) {
        // console.log(words[i])
        result += words[i];
        result += ' ';
    }
    return result
}

console.log("o/p for Aya Hussein =====>", revStr("Aya Hussein Ali"));