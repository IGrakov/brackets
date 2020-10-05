module.exports = function check(str, bracketsConfig) {

    if (str.length === 0 || bracketsConfig === 0) {
        return true;
    }

    let bracketsOpening = [];
    let bracketsClosing = [];
    let bracketsStack = [];
    bracketsConfig.forEach(element => {
        bracketsOpening.push(element[0]);
        bracketsClosing.push(element[1]);
    });

    str.split('').forEach(element => {
        // check if element is an opening bracket, and in case
        // opening and closing brackets are the same then check if it is
        // already in the stack, then it is a closing bracket
        if (bracketsOpening.includes(element) && !bracketsStack.includes(element)) {
            bracketsStack.push(element);
        } else if (bracketsClosing.includes(element)){
            // check if current closing bracket matches last opening bracket
            // comparing opening bracket with respective index with opening bracket in the stack 
            // then deleting the opening bracket from the stack
            if (bracketsStack.length !== 0 && 
                bracketsStack[bracketsStack.length - 1] === bracketsOpening[bracketsClosing.indexOf(element)]) {
                bracketsStack.pop();
            } else {
                return false;
            }
        }
    });

    return bracketsStack.length === 0 ? true : false;

}
