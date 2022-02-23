/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    // let regex = /\+|-|\*|\//
    // let num = "";
    // let arr = [];
    // let result = 0;

    // for (let i = 0; i < s.length; i++) {
    //     if (!s[i].match(regex)) {
    //         console.log(s[i])
    //         num += s[i]
    //     } else {
    //         arr.push(Number(num));
    //         num = "";
    //         arr.push(s[i])
    //     }
    //     if (i === s.length - 1) {
    //         arr.push(Number(num));
    //     }
    // }
    // let pem = /\*|\//;
    // let das = /\+|-/;

    // // while (arr.match(regex)) {

    //     if (arr.find(el => pem.test(el))) {
    //         let operation = arr.find(value => pem.test(value))
    //         let idx = arr.indexOf(operation);

    //         result += Number(arr[idx - 1]) operation Number(arr[idx + 1])
    //     } else {
    //         let operation = arr.find(value => pem.test(value))

    //     }

    //     arr[arr.indexOf(operation)] = ""
    // // }

    // return arr.find(value => regex.test(value));

    const stack=[]
    let operation='+'
    let currNum=0
    for(let i=0;i<s.length;i++){
        let str=s[i]
        if(str>='0'&&str<='9'){
            currNum=(currNum*10)+ (+str)
        }
        if(['+','-','*','/'].includes(str)||i===s.length-1){
            if(operation==='+'){
                stack.push(currNum)
            }else if(operation==='-'){
                stack.push(-currNum)
            }else if(operation==='*'){
                stack.push(stack.pop()*currNum)
            }else if(operation==='/'){
                if(stack[stack.length-1]<0){
                    stack.push(Math.ceil(stack.pop()/currNum))
                }else{
                    stack.push(Math.floor(stack.pop()/currNum))
                }
            }
            currNum=0;
            operation=str
        }
    }
    let res=0;
    while(stack.length){
        res+=stack.pop()
    }
    return res;
};
console.log(
    calculate("3+2*2"),//7
);