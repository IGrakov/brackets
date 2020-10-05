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

    for (let i = 0; i < str.length; i++) {
        // if current bracket is an opening one put it into stack
        // in case opening and closing brackets are the same
        // check if such bracket is already in the stack then current one is not an opening bracket
        if (bracketsOpening.includes(str[i]) && !bracketsStack.includes(str[i])) {
            bracketsStack.push(str[i]);
        } else if ((bracketsClosing.includes(str[i])) && (bracketsStack.length !== 0)){
            // check if current closing bracket matches last opening bracket
            // comparing opening bracket with respective index with opening bracket in the stack 
            // then deleting the opening bracket from the stack
            if ((bracketsStack.length !== 0) && (bracketsStack[bracketsStack.length - 1] === bracketsOpening[bracketsClosing.indexOf(str[i])])) {
                bracketsStack.pop();
            /*} else {
                return false;*/
            }
        // if current bracket is a closing one and there is nothing to match return false
        } else if ((bracketsClosing.includes(str[i])) && (bracketsStack.length === 0)) {
            return false;
        }
    }

    return bracketsStack.length === 0 ? true : false;
}
