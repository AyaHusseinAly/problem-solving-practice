function reverseString(string) {
    let reversedString = '';
    let stack = [];
    for (let char of string) stack.push(char);

    while (stack.length > 0) {
        reversedString += stack.pop();
    }
    return reversedString;
}



console.log(' output for string "Ahmed": ',
    reverseString("Ahmed")
);