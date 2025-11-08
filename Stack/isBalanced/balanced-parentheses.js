// Common application on stack "balanced parentheses with counting balanced and unbalanced"

function isBalanced(string) {
    let isBalanced = true;
    let balanced = 0;
    let unbalanced = 0;
    let stack = [];
    const pairs = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    for (char of string) {
        if (Object.keys(pairs).includes(char)) {
            unbalanced++;
            stack.push(pairs[char]);
        } else if (Object.values(pairs).includes(char)) {
            unbalanced++;
            console.log('char ', char, ' stack:', stack)
            const item = stack.pop();
            if (char !== item) {
                isBalanced = false;
                stack = [];
            } else {
                balanced++;
                unbalanced -= 2;
            }
        }
    }
    if (stack.length !== 0) isBalanced = false;
    return [isBalanced, balanced, unbalanced];

}

let strings = [
    "(string[)5]",
    "((())",
    "(string[5])",
    "(([()]))",
    "()[]{}",
    "",
    "(string[)5]"
];

strings.forEach(str => {
    console.log(
        `output for "${str}" :`,
        isBalanced(str)
    );
})