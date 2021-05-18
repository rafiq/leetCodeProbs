/**
 * @param {string} text
 * @return {string}
 */
 var reorderSpaces = function(text) {
    let spaceCount = 0;
    let wordCount = text.match(/[^ ]+/g).length || 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") spaceCount++;
    }
    let evenSpacing = Math.floor(spaceCount / (wordCount - 1))
    let remainingSpace = spaceCount % evenSpacing
    return text.match(/[^ ]+/g).join("_".repeat(evenSpacing)) + "_".repeat(remainingSpace)
};
console.log(
    reorderSpaces("  this   is  a sentence "),//"this   is   a   sentence"
    reorderSpaces(" practice   makes   perfect"),//"practice   makes   perfect "
    reorderSpaces("hello   world"),//"hello   world"
    reorderSpaces("  walks  udp package   into  bar a"),//"walks  udp  package  into  bar  a "
    reorderSpaces("a"),//"a"
)