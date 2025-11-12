let flattenObject = (obj) => {
    let flattenedObj = {};
    for (let key of Object.keys(obj)) {
        if (Object.prototype.toString.call(obj[key]) === '[object Object]') { // or use  tree.constructor !== Object
            const internalObj = flattenObject(obj[key]);
            for (let k of Object.keys(internalObj)) {
                flattenedObj[key + '.' + k] = internalObj[k]
            }
        } else {
            flattenedObj[key] = obj[key]
        }
    }
    return flattenedObj;
}

console.log("flattenedObj 1 =",
    flattenObject({
        a: { b: { c: 1 }, m: { e: 8 } },
        f: { g: 1 }
    })
);