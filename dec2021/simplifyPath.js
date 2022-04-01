/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    path = path.split("/").filter(a => a !== "")

    let stack = []

    for(let p of path){
        if(p === ".." ){
            stack.pop()
            continue
        }
        if(p !== ".")
         stack.push(p)
    }

    return "/" + stack.join("/")
    // const removeLastSlash = (word) => {
    //     if (word[word.length - 1] === "/" && word.length > 1) {
    //         return word.slice(-1);
    //     }
    //     return word;
    // }

    // const removeDoubleSlash = word => {
    //     let temp = Array.from(word.matchAll("//"), m => m[0])
    //     while (temp) {
    //         word = word.replace(/(\/\/)/,"/")
    //         temp = Array.from(word.matchAll("//"), m => m[0])
    //     }
    //     return word;
    // }

    // const removeDoubleDots = word => {
    //     [...path.matchAll(/(\.\.)/g)]
    //     // while (word)
    // }
    // // path = path.replace(/(\/\/)/,"/")
    // // return path;
    // return removeDoubleSlash(path);
    // return Array.from(path.matchAll("//"), m => m[0]);
    let arr = path.split("/"), stack = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "" || arr[i] === ".") continue;
        if (arr[i] === "..") {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(arr[i]);
        }
    }
    if (stack.length === 0) return "/";
    let res = new Array(stack.length+1), idx = res.length - 1;
    while (stack.length > 0) {
        res[idx--] = stack.pop();
    }
    res[idx] = "";
    return res.join("/");
};
console.log(
    simplifyPath("/home//foo/.."),//"/home"
    simplifyPath("/home//foo/.."),//"/home"
    simplifyPath("/home/"),//"/home"
);