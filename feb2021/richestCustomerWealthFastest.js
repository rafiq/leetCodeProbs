var maximumWealth = function(accounts) {
    let res = 0
    accounts.map(item => {
        let temp = 0
        item.map(i => {
            temp += i
        })
        res > temp? res = res : res = temp
    })
    return res
};
//