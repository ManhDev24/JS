/* Viết chương trình tính cạnh huyền của tam giác vuông*/

var canhGocVuong1 = + prompt(`Hãy nhập cạnh góc vuông 1 ! `);
var canhGocVuong2 = + prompt('Hãy nhập cạnh góc vuông  2!');
var sum = Math.pow(canhGocVuong1,2) +  Math.pow(canhGocVuong2,2)
console.log('sum: ', sum);
var canhHuyen = Math.sqrt(sum);
console.log('canhHuyen: ', canhHuyen);


