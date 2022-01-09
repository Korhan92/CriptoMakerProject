
const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

let alphaArr = alpha.split(" ");

//STEP-1
const special = "* $ & %".split(" ");

const karma = [...numeric, ...alphaArr, ...special];
console.log(karma)

function randomNumb(arr, len) {

  let str = "";
  for (let i = 0; i < len; i++) {
    let ranNum = Math.floor(Math.random() * arr.length);
    str += arr[ranNum];
  }

  return str;
}
console.log(randomNumb(karma, 16))


//STEP 2





//STEP 3
// function token(arr,len) {

//     let str = "";
//     for (let i = 0; i < len; i++) {
//         let ranNum = Math.floor(Math.random()*arr.length);
//         str+= arr[ranNum];

//         if (typeof arr[ranNum] === "number") {
//             if (typeof arr[ranNum.length-2] !== "number") {


//             str+= "-";
//             }
//         }

//     }

//     console.log(str[str.length-1])
//     console.log(str[str.length-2])
//     return str;

// }

// console.log(token(karma,10))
let givenUnwanted = "3 , * , j , q , z".split(" , ")
console.log(givenUnwanted)
function userId1(passLength, arr,unwant) {
  let user = "";
  for (let i = 0; i < passLength; i++) {
    let rndm = Math.floor(Math.random() * arr.length);
      if (arr[rndm] == unwant[0] || arr[rndm] == unwant[1] || arr[rndm] == unwant[2] || arr[rndm] == unwant[3] || arr[rndm] == unwant[4]) {
      user+= arr[rndm-2];
      } else {
        user+= arr[rndm]
      }
    if (typeof arr[rndm] == "number" && i < passLength - 2) {
      user += "-";
    }
  }

  return user;
}
console.log(userId1(10, karma,givenUnwanted));

//STEP 4


// console.log(givenUnwanted)

// // m0-*1-%3-b7
// // ['e', 'f', 'v', '7', '-', 'g', 'z', 'n', 't', 'i']
// function userId2(len, arr, unwanted) {
//   let users = userId1(len, arr).split("");
//   users.filter(i => i)
//   return users;

// }
// console.log(userId2(10, karma, givenUnwanted));



let yeniDizi = [...numeric, ...alphaArr, ...special];

let idLength = 10;


function userId(params, arr, unwant) {
  let user = [];
  for (let i = 0; i < params; i++) {
    let rndm = Math.floor(Math.random() * arr.length);
    user[i] = arr[rndm];

    for (let j = 0; j < unwant.length; j++) {
      if (arr[rndm] == unwant[j]) {
        user.pop();
        i--;
      }
    }
    if (typeof user[i] == "number" && i < params - 2) {
      user.push("-");
      i++;
    }
  }

  return user.join("");
}

console.log(userId(idLength, yeniDizi, givenUnwanted));

