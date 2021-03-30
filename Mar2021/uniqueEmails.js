/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
    let set = new Set();

    // for (let i of emails) {
    //     if (set[i])
    // }
    let splitArray = emails.map(el => el.split("@"));

    let newArray = []

    for (let i = 0; i < splitArray.length; i++) {
        if (splitArray[i][0].includes(".")) newArray.push(splitArray[i][0].replace(/[.]/g,""));
        if (splitArray[i][0].includes("@")) newArray.push(splitArray[i][0].slice(0,splitArray[i][0].indexOf("+")))
    }

    return splitArray.map(arr => {
        if (arr[0].includes(".")) return  arr[0].replace(/[.]/g,"");
        if (arr[0].includes("@")) return arr[0].slice(0,arr[0].indexOf("+"))
        return arr[1]
    })

};
console.log(

    numUniqueEmails(["test.em.ail+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]),//3
    numUniqueEmails(["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
    ),//3

    )
