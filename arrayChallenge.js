// array consisting of 26 items
// values corispond to the unicode of A - Z
const array = ['65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
// value to be used for calling the array
let str = "hello";
// str will become uppercase and call the unicode of its first letter minuse 65
console.log(array[str.toUpperCase().charCodeAt(0) - 65]);
console.log(str.toUpperCase().charCodeAt(0));
