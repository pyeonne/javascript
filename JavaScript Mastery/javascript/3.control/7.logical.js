// 논리 연산자 Logical Operator
// && 그리고
// || 또는
// ! 부정(단항 연산자에서 온 것)
// !! 불리언 값으 변환 (단항 연산자 응용 버전)
let num = 8;
if (num >= 0 || num > 20) {
    console.log('👍');
}
if (num != 9) {
    console.log('😀');
}

console.log(!'text');
console.log(!!'text');
