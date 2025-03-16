function isPrimitive(obj) {
    return obj == null ||
        typeof obj === 'number' ||
        typeof obj === 'string' ||
        typeof obj === 'boolean';
}
function isArray(obj) {
    return Array.isArray(obj);
}
function isObject(obj) {
    return obj != null && typeof obj === 'object';
}
function deepClone(obj) {
    if (isPrimitive(obj)) {
        return obj; 
    } else if (isArray(obj)) {
        return obj.map((val) => {
            return deepClone(val); 
        });
    } else if (isObject(obj)) {
        let res = {}; 
        for (let k in obj) {
            res[k] = deepClone(obj[k]); 
        }
        return res;
    }
}


