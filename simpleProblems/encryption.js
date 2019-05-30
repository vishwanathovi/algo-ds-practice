// Question: https://www.hackerrank.com/challenges/encryption/problem?isFullScreen=true

function rowColumn(number){
  let floorValue = Math.floor(Math.sqrt(number));
  let ceilValue = Math.ceil(Math.sqrt(number));

  return {
    rows: floorValue*ceilValue < number? ceilValue: floorValue ,
    columns: ceilValue
  }
}

function encryption(s){
   s = s.split(" ").join("");
   let sArray = s.split("");
   let {rows, columns} = rowColumn(s.length);
   let finalArray = [];
   let matrix = [...Array(rows)].map(e => Array(columns).fill(""))

   for (let i = 0; i < rows; i++){
     for (let j = 0; j < columns; j++){
       if (!sArray.length) break;
       matrix[i][j] = sArray.shift();
     }
   }

   for (let j = 0; j < columns; j++){
     for (let i = 0; i < rows; i++){
       finalArray.push(matrix[i][j]);
     }
     finalArray.push(" ");
   }

   return finalArray.join("").trim();
}

let string = "chillout";
console.log(encryption(string));
