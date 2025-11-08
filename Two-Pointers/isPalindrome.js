function isPalindrome(x) {
    let length = x.length;
    if (!x) return true;
    for (let i = 0; i <= length / 2; i++) {
        if (x[i].toLowerCase() !== x[length - 1 - i].toLowerCase()) return false;
    }
    return true;
}