/*
that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// best performance
function solution(A) {
    const seen = new Set();

    for (let x of A) {
        if (x > 0) seen.add(x);
    }

    let smallest = 1;

    while (seen.has(smallest)) {
        smallest++;
    }

    return smallest;
}



// sort is n log n so not best performance
function solution(A) {
    // Implement your solution here
    let sortted = A.sort().filter(item => item >= 0);
    let length = sortted.length
        // console.log('sortted array = ',sortted)

    if ((length == 0) || (sortted[0] > 1) || (sortted[0] == 0 && sortted[1] !== 1)) return 1;
    if (sortted[0] > 1)
        return sortted[0] - 1

    let result = sortted[length - 1] + 1
    for (let i = 1; i < length; i++) {
        if (sortted[i + 1] - sortted[i] !== 1) {
            result = sortted[i] + 1
            break;
        }
    }
    return result
}