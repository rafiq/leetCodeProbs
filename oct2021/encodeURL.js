/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
//  var encode = function(longUrl) {
//     return btoa(longUrl);
// };

// /**
//  * Decodes a shortened URL to its original URL.
//  *
//  * @param {string} shortUrl
//  * @return {string}
//  */
// var decode = function(shortUrl) {
//     return atob(shortUrl);
// };

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
 let codeDB = new Map(), urlDB = new Map()
 const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

 const getCode = () => {
     let code = new Array(6).fill()
         .map(_ => chars.charAt(~~(Math.random() * 62)))
     return "http://tinyurl.com/" + code.join("")
 }

 const encode = longUrl => {
     if (urlDB.has(longUrl)) return urlDB.get(longUrl)
     let code = getCode()
     while (codeDB.has(code)) code = getCode()
     codeDB.set(code, longUrl)
     urlDB.set(longUrl, code)
     return code
 }

console.log(
    encode("https://leetcode.com/problems/design-tinyurl"),
    "0011 1111 1111 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000".length
);