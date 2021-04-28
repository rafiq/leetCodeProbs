function driver(data) {
    let gender = data[data.length - 1]
    let checks = "AA";
    let nine = 9;
    let middleName = data[1] ? data[1] : false;
    let yearDigit = new Date(data[3]).getFullYear() % 10;
    let initials = (data[0].slice(0,1) + data[1].slice(0,1)).padStart(2,"9");
    let day = data[3].slice(0,2).padStart(2,"0");
    let birthMonth = gender === "F" ? String(new Date(data[3]).getMonth() + 51).padStart(2,"0") : String(new Date(data[3]).getMonth() + 1).padStart(2,"0");
    let birthYearDigit = Math.floor(new Date(data[3]).getFullYear() / 10 ) % 10// > 99 ?
    let name = data[2].slice(0,5).padEnd(5,"9");
    return name.toUpperCase() + birthYearDigit + birthMonth + day + yearDigit + initials.toUpperCase() + nine + checks;
  }
  console.log(
    driver([ 'Crane', 'Brooks', 'Nick', '21-Apr-1995', 'F' ]),//'NICK9954215CB9AA'
    driver(["John","James","Smith","01-Jan-2000","M"]),// "SMITH001010JJ9AA", "Should return 'SMITH001010JJ9AA'")


    driver(["Johanna","","Gibbs","13-Dec-1981","F"]),// "GIBBS862131J99AA", "Should return 'GIBBS862131J99AA'")

    // data =
    driver(["Andrew","Robert","Lee","02-September-1981","M"]),// "LEE99809021AR9AA", "Should return 'LEE99809021AR9AA'")
  )