var array = [1, 2, 4, 6, 8, 12, 22, 67, 60, 99, 30, 2, 45, 56, 12, 60, 31];

// Tính tổng các phần tử trong mảng số nguyên
const sum = array.reduce((acc, current) => acc + current, 0);
console.log(`Tong: ${sum}`);

//Tìm phần tử lớn nhất và nhỏ nhất trong mảng
let min = array[0];
let max = array[0];
for (let i = 0; i < array.length; i++) {
  if (min > array[i]) {
    min = array[i];
  }
}
for (let i = 0; i < array.length; i++) {
  if (max < array[i]) {
    max = array[i];
  }
}
console.log(`Min: ${min}`);
console.log(`Max: ${max}`);

//Đếm số phần tử chẵn và lẻ trong mảng
let countEven = 0;
let countOdd = 0;
for (let i = 0; i < array.length; i++) {
  let num = array[i];
  if (num % 2 == 0) {
    countEven++;
  } else {
    countOdd++;
  }
}
console.log(`Even number: ${countEven}`);
console.log(`Odd number: ${countOdd}`);

//Tạo một mảng mới chỉ chứa các số chẵn từ mảng ban đầu
let oddArr = [];
for (let i = 0; i < array.length; i++) {
  let num = array[i];
  if (num % 2 == 0) {
    oddArr.push(num);
  }
}
console.log(`Odd array: ${oddArr}`);

//Kiểm tra xem một phần tử có tồn tại trong mảng hay không
let check = 12;
if (array.includes(check)) {
  console.log(`Co phan tu ${check} trong mang`);
} else {
  console.log(`Khong co phan tu ${check} trong mang`);
}

//Sắp xếp mảng theo thứ tự tăng dần
const sortArr = array.sort((x,y) => x-y);
console.log(`Ascending order of array: ${sortArr}`);

//Đảo ngược thứ tự phần tử trong mảng.
const reverseArr = array.slice().reverse();
console.log(`Reverse array: ${reverseArr}`);


//
//Xóa phần tử trùng lặp trong mảng.
const uniqueArr = array.filter((a,b,c) => {
    return c.indexOf(a) == b;
})
console.log(uniqueArr);

//Tìm số lần xuất hiện của một phần tử trong mảng
let count = 0;
for(let i =0 ; i< array.length; i++){
    if(array[i] === check){
        count ++;
    }
}
console.log(`So lan xuat hien phan tu ${check} la : ${count} lan`);


//Gộp hai mảng thành một mảng duy nhất (không trùng lặp).

let array1 = [2,3,45,66,90,99,3,4,5];
const mergeArr = [...new Set([...array, ...array1])];
console.log(mergeArr);

//Tạo một mảng mới gồm bình phương của các phần tử trong mảng gốc.

const squareArr = array1.map((num) => num*num);
console.log(squareArr);


//Tính trung bình cộng của các số trong mảng.
let sum1 =0;
let n = array.length;
for(let i =0 ; i < n; i++){
    sum1 += array[i];
}
const tbc = sum1/n;
console.log(`Trung binh cong: ${tbc}`);


//Trộn ngẫu nhiên các phần tử trong mảng.

function shuffer(array){
    for(let i = array.length -1; i >0; i--){
        const j = Math.floor(Math.random() * (i-1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffer(array1);
console.log(`Shuffered array: ${array1}`);



