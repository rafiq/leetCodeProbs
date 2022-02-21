var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    const map = {
        2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
    }
    let result = [];
    const backTrack = (current, i) => {
        if (i > digits.length - 1) {
            result.push(current);
            return;
        }
        let letters = map[digits[i]];
        for (let char of letters) {
            backTrack(current + char, i + 1);
        }
    }
    backTrack("",0);
    return result;
}