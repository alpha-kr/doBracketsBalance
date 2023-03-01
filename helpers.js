function doBracketsBalance(brackets) {
    if (typeof brackets != "string") return  false;

    if(brackets.length == 0) return false;

    const openBrackets = ['[', '{', '('];

    const closeBrackets = [']', '}', ')'];

    const stack = [];

    let isValidString = true;

    let i = 0;

    while (isValidString && i < brackets.length) {

        let item = brackets[i];

        if (openBrackets.includes(item)) {
            stack.push(item);
        }

        if (closeBrackets.includes(item) && stack.pop() !== openBrackets[closeBrackets.indexOf(item)]) {
            isValidString = false;
        }

        i++;
    }

    if (stack.length > 0) {
        isValidString = false;
    }

    return isValidString;
}

module.exports = {doBracketsBalance};