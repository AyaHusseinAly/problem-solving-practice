function isBalanced(s, caps) {
    let paires = {};
    let similarPaires = []
    let stack = [];

    for (let c = 0; c < caps.length - 1; c += 2) {
        paires[caps[c + 1]] = caps[c]
    }

    const opening = Object.values(paires)
    const closing = Object.keys(paires)
    for (let char of s) {
        if (opening.includes(char)) {
            paires[char] == char ?
                similarPaires.push(char) :
                stack.push(char);
        }
        if (closing.includes(char) && !similarPaires.includes(char)) {
            const lastItem = stack.pop();
            if (closing.includes(char) && (paires[char] !== lastItem))
                return false;
        }
    }

    if (stack.length > 0 || similarPaires.length % 2 !== 0)
        return false;

    return true;
}

console.log(`output for string "Aya says -Hello-"`, isBalanced("Aya says -Hello-", "--"))
console.log(`output for string "Aya says -Hello"`, isBalanced("Aya says -Hello", "--"))
console.log(`output for string "[Aya says (Hello)]"`, isBalanced("[Aya says (Hello)]", "[]()"))