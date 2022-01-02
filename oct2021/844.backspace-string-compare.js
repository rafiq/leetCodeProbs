/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {

    // console.log(s.replace(/[a-z]?#/gi,""), t.replace(/[a-z]?#/gi,""))
    // return s.replace(/[a-z]?#/gi,"") === t.replace(/[a-z]?#/gi,"")
    while (s.match(/[a-z]?#/)) {
        s = s.replace(/[a-z]?#/,"");
    }
    while (t.match(/[a-z]?#/)) {
        t = t.replace(/[a-z]?#/,"")
    }
    console.log(s,t)
    return s === t;
};

// console.log(
//     backspaceCompare("a##c", t = "#a#c"),//true
//     backspaceCompare("ab##"
//     ,"c#d#"),//true
// )
// @lc code=end

