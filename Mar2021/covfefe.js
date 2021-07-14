
function covfefe(str){
    let regex = /coverage/g
    return str.includes("coverage") ? str.replace(regex,"covfefe") : str + " covfefe";
  }
  console.log(
    // covfefe("coverage"),//"covfefe");
    covfefe("nq8ccoveragewu4ht s2u45 yv8stcoverageitj5p dqno tm2pdcoveragekx4qg ewfxu yq61x 93815"),//'nq8ccovfefewu4ht s2u45 yv8stcovfefeitj5p dqno tm2pdcovfefekx4qg ewfxu yq61x 93815'
    // covfefe("coverage coverage"),//"covfefe covfefe");
    // covfefe("nothing"),//"nothing covfefe");
    // covfefe("double space "),//"double space  covfefe");
    // covfefe("covfefe"),//"covfefe covfefe");
  )