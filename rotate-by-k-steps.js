function rotateArray(n, k, arr) {
    let slicedArr = arr.slice(-k);
    let restArr = arr.slice(0, -k)
    return slicedArr.concat(restArr);

}