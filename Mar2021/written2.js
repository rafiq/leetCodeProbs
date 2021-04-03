// // // // // // // function foo() {
// // // // // // //     let b = 3;
// // // // // // //   }

// // // // // // //   foo();
// // // // // // //   let a = b;

// // // // // // //   console.log(a);

// // // // // // let a = 'There are Klingons on the starboard bow!';
// // // // // // let b = a;
// // // // // // a += ' Scrape them off, Jim!';
// // // // // // // console.log(b)

// // // // // let a = 'hello';

// // // // // function run(a) {
// // // // //   console.log(a.toUpperCase());
// // // // // }

// // // // // run();

// // // // let a = 'hello';

// // // // function run(a) {
// // // //   console.log(a.toUpperCase());
// // // // }

// // // // run("5");

// // // let counter = 1;

// // // function decrementCounter(counter) {
// // //   counter = counter - 1;
// // // }

// // // decrementCounter(counter);
// // // console.log(counter);

// // let a;

// // function func1() {
// //   const b = 1;
// //   function func2() {
// //     const func3 = c => c + 5;
// //   }

// //   const func4 = function() {
// //     let d = 3;
// //     console.log(d);
// //   }
// // }
// let a = ["hello"];
// let b = a;
// a.push("world");
// console.log(b); // => [ 'hello', 'world' ]

// a = ["hi"];
// a.push("there");
// console.log(b); // => [ 'hello', 'world' ]

// let a = { key: "hello" };
// let b = { value: "world" };

// let c = a;
// let d = b;
// c.value = a.value;
// b = a;
// a = c;

// more code below


// const change = word => {


//     word = word.concat(' world');
//     return word;
//   };

//   let greeting = 'hello';
//   change(greeting);

//   console.log(greeting);



// function drop(array) {
//     array.pop();
//   }

//   let numbers = [1, 2, 3];
//   drop(numbers);

//   console.log(numbers.length);


// function findNum(arr) {
//         return arr.find(el => el )
// }
// console.log(findNum([3,4,5,1]))

// let arr = [1, 2, 3].map(function (n) {
//     return n < 2;
//   });

//   console.log(arr);

// let arr = [ 'a', 'b', 'c' ];
// let newArr = arr.filter(str => str);
// arr.push('d');
// console.log(arr)
// console.log(newArr);


// let numbers1 = [8, 157, 203, 15, 2, 21];
// let numbers2 = numbers1.sort((a,b) => b - a);
// console.log(numbers2); // => [ 203, 157, 21, 15, 8, 2 ]

// let a = {};
// // 5 * a.x;      // Evaluates to NaN
// console.log(5 * undefined)

function objectHasProperty(object, property) {
    return object.hasOwnProperty(property) ? 1 : 2;
  }

  let obj = {}
  obj['something'] = 3;
  obj['enabled'] = false;
  obj["custom1"] = undefined;
  obj["custom2"] = 0;

  console.log(
  objectHasProperty(obj, 'something'),//=>returns 1
  objectHasProperty(obj, 'active'),//=>returns 2
  objectHasProperty(obj, 'custom1'),//=>returns 1
  objectHasProperty(obj, 'custom2'),//=>returns 1
  )