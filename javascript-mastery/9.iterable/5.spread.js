// Spread 연산자, 전개 구문
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 촤르르르륵 펼쳐질 수 있다
// func(...iterable)
// [...iterable]
// { ...obj }
// EcmaScript 2018
function add(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];

console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
    console.log(nums);
}
sum(1, 2, 0, 1, 2, 4);

// Array Concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3);

arr3 = [...arr1, '🍓', ...arr2];
console.log(arr3);

// Object
const pyeonne = { name: 'pyeonne', age: 29, home: { address: 'home' } };
const updated = {
    ...pyeonne,
    job: 's/w engineer',
};
console.log(pyeonne);
console.log(updated);
