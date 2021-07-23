/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
    let uniqueEmails = [];
    let splitEmails = emails.map(el => el.split("@"))

    splitEmails.forEach(email => {
        uniqueEmails.push([cleanEmail(email[0]),email[1]])
    })
    let cleanedEmailsArray = uniqueEmails.map(el => el.join("@"));
    let set = new Set(cleanedEmailsArray);
    return set.size
};
function cleanEmail(email) {
    email = email.replace(/[.]/gi,"");
    return email.split("+")[0]
}
console.log(
    numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]),//2
    numUniqueEmails(["a@leetcode.com","b@leetcode.com","c@leetcode.com"]),//3
)
// Great solution which is very similar to mine but this is definitely more concise and it uses much better variable naming than I did. I like the use of the reduce method which works pefectly for this sitation.
var numUniqueEmails = function(emails) {
    return emails.reduce((acc, curr) => {
        const split = curr.split('@')
        let localName = split[0]
        const domainName = split[1]
        const firstPlusIndex = localName.indexOf('+')
        if(firstPlusIndex !== -1){
            localName = localName.slice(0, firstPlusIndex)
        }
        localName = localName.replace(/\./g, '')
        acc.add(`${localName}@${domainName}`)
        return acc
    }, new Set()).size
};