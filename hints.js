    // move first element to end
    arr.push(arr.shift());

    // sort string by converting to arr
    let sortedString = originalString.split('').sort().join('');


    // remove non-alphanumeric characters using RegEX
    replace(/[^a-z0-9]/gi, '')