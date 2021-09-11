/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
 var subdomainVisits = function(cpdomains) {
    let hash = {}
    let result = []

    cpdomains.forEach(el => {
        let original = el.split(" ")
        let domain = original[1].split(".")
        let num = +original[0]
        // console.log(num,domain)
        for (let i = 0; i < domain.length; i++) {
            temp = domain.slice(i).join(".")
            hash[temp] ? hash[temp] += num : hash[temp] = num
        }
    })

    Object.entries(hash).forEach(el => {
        let temp = ""
        temp += el[1] + " " + el [0]
        result.push(temp)
    })
    return result
};

function domainSparser(arr) {
    let result = []

}
console.log(
    subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"])
)

// ! The below is my answer essentially but it is one of the faster ones. They did outsource the helper function as I was going to do I like how they used map at the end to get the final list. I also like
var subdomainVisits = function(cpdomains) {

    /*

        testing.testingcheck.hello.com

        testing.testingcheck.hello.com
        testingcheck.hello.com
        hello.com
        com



    */


    const output = [];
    const dict = {};

    for (let domain of cpdomains) {
        updateDict(domain, dict);
    }
    const keys = Object.keys(dict);
    return keys.map(val => dict[val] + " " + val);
};

function updateDict(str, dict) {
    const arr = str.split(" ");
    const count = Number(arr[0]);
    const domainList = getDomainList(arr[1]);
    for (let domain of domainList) {
        dict[domain] = dict[domain] ? dict[domain] + count : count;
    }
}

function getDomainList(str) {
    /*
         a.dddd.b.c


    */
    const arr = [str];
    while (str.length) {
        const firstIndex = str.indexOf(".");
        if (firstIndex === -1) {
            return arr;
        }
        str = str.slice(firstIndex + 1, str.length);
        arr.push(str);
    }
}