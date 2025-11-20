function firstNonRepeatingLetter(s) {
    let str = s.toLowerCase();
    const charCountMap = {};
    for (i in str) {
        if (str[i] in charCountMap) {
            charCountMap[str[i]] = charCountMap[str[i]] + 1;
        } else {
            charCountMap[str[i]] = 1
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (charCountMap[s[i].toLowerCase()] == 1) return s[i]
    }

    return '';
}