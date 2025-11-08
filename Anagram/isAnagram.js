// sort both then compare
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    let sSorted = s.toLowerCase().split('').sort();
    let tSorted = t.toLowerCase().split('').sort();
    for (let i = 0; i < s.length; i++) {
        if (sSorted[i] !== tSorted[i]) return false;
    }
    return true;
}

// initial solution
/**
function isAnagram(s, t) {
    let tChar = t.split('');
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        let index = tChar.indexOf(char);
        if (index == -1)
            return false;
        tChar.splice(index, 1);
    }
    if (tChar.length !== 0) return false;
    return true;
} 

*/