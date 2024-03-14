// DOM
// document object model



/* 
Cú pháp truy xuất đến nội dung của thẻ
<tag> Nội dung của thẻ</tag>
.innerHtml: lấy nội dung của thẻ
.innerText lấy phần văn bảng ko bao gồm thẻ
*/

var tagP = document.getElementById('text')
tagP.innerHTML;
console.log('tagP: ', tagP);
/* Cú pháp truy xuất đến nội dung của hình ảnh thẻ img 
.src : thuộc tính của thẻ */
// tagP.innerHTML = 'Xin chào bc66'
var tagImg = document.getElementById("hinhAnh")
tagImg.src = 'https://mcdn.coolmate.me/uploads/November2021/meo-1_88.jpg'


/* Cú pháp truy xuất đến nội dung của thẻ input
.value sẽ lấy được giá trị nhập trên thẻ
.className : mô tả class của tag đó (có thể thay đổi được)
.classList.add("new_class","new_class")
*/

var tagInput = document.getElementById("input-text");
tagInput.value;
// console.log('tagInput.value;: ', tagInput.value);

tagInput.value = `Hello bc66`
console.log('tagInput.value : ', tagInput.value);



tagInput.className = "form-control-w-25"
var test = tagInput.classList;
test.add("bg-dark");

/*
Có thể thay đổi cả style
.style.[thuộc tính css] viết dạng camelCase

*/
tagInput.style.fontSize = '30px'
tagInput.style.color = "yellow"