function isValid(s) {
    const stack = [];

    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (brackets[char] != null) {
            const topElement = stack.pop();
            if (topElement !== brackets[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

console.log(isValid("()"));       //true
console.log(isValid("()[]{}"));   //true
console.log(isValid("(]"));      //false
console.log(isValid("([)]"));     //false
console.log(isValid("{[]}")); //true
console.log(isValid("{}[]{}[]()((())){[([[()]])]}")); //true