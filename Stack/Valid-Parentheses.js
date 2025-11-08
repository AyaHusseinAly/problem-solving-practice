function validBraces(braces) {
    const paires = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    const stack = [];

    for (let char of braces) {
        if (['(', '[', '{'].includes(char))
            stack.push(char);
        else if ([')', ']', '}'].includes(char)) {
            if (paires[char] !== stack.pop())
                return false;
        }
    }

    if (stack.length > 0)
        return false;

    return true;
}




console.log(`output for string "{{(([[]"`, validBraces("{{(([[]"))