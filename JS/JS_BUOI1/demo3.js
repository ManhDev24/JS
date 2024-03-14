/* Viết chương trình cho phép người dùng nhập vào chữ có 3 chữ số
Yêu cầu tính in ra tổng của ba chữ số

*/




var chuso1 = +prompt("Hay nhập chữ số hàng chục ");
var sum = 0;
while (chuso1 != 0) {
    var c = chuso1 % 10;
    chuso1 = parseInt(chuso1 / 10);
    sum += c;
}
console.log('sum: ', sum);
