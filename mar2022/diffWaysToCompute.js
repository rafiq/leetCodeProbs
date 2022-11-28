/**
 * @param {string} expression
 * @return {number[]}
 */
 var diffWaysToCompute = function(expression) {
     let numsArray = expression.replace(/[^0-9]/gi,"").split("")
     //recrusively put them together with
    const helper = arr => {
        if (arr.length === 0) {
            return;
        }

        // use method to place paraenthesis in the arr in various places

        // number of parenthsis will be numsArray.length - 1;


        helper(arr.slice(1))
    }


    return numsArray

    if(!expression.length) return [0];
    const result = [];

    for(let idx = 0; idx < expression.length; idx++){
        const char = expression[idx];
        if(char === "+" || char === "-" || char === "*"){
			//recurse
            const left = diffWaysToCompute(expression.substring(0, idx));
            const right = diffWaysToCompute(expression.substring(idx+1));
            //compute
            for(let leftVal of left){
                for(let rightVal of right){
                   switch(char){
                    case "+": result.push(parseInt(leftVal)+parseInt(rightVal)); break;
                    case "-": result.push(parseInt(leftVal)-parseInt(rightVal)); break;
                    default: result.push(parseInt(leftVal)*parseInt(rightVal)); break;
                    }
                }
            }
        }
    }
    if(!result.length) return [expression]
    return result
};

console.log(
    diffWaysToCompute("2*3-4*5")
);