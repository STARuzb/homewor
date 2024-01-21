///1
// function footballPoints(wins, draws, losses) {
//     const totalPoints = (wins * 3) + draws;
//     return totalPoints;
// }
// console.log(footballPoints(54, 0, 7)); 
// console.log(footballPoints(5, 0, 2)); 
// console.log(footballPoints(0, 0, 1));


///2
// function harflar(str) {
//     let count = 0;
//     for (let char of str) {
//         count++;
//     }
//     return count;
// }
// console.log(harflar("string"));


///3
// function arraylar(length) {
//     return Array.from({ length }, (_, index) => index + 1);
// }
// console.log(arraylar(7));

///5
// function teskariarray(arr) {
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }
// let originalArray = [7, 17, 27, 37, 47];
// let reversedArray = teskariarray(originalArray);
// console.log(reversedArray);