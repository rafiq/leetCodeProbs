function switcheroo(x){


        return x.split("").reduce((acc,curr) => {
            if (curr === "a") acc += "b";
            else if (curr === "b") acc += "a";
            else acc += curr;
            return acc;
        },"");
}
console.log(

        switcheroo('abc'),// 'bac');
        switcheroo('aaabcccbaaa'),// 'bbbacccabbb');
        switcheroo('ccccc'),// 'ccccc');
)
// I love the short code snippets
const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")