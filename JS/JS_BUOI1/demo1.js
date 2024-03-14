 // alert(`Hello bc66`)
        // document.write(`Hello bc66a`);
        // console.log(`10 d`);
        // biến 
        var message = 'hello cac ban abc'

        /*
            `Cách đặt tên biến
            +Biến ko được đặt cùng với các từ khóa của js
            +Biến đặt tên phải có ý nghĩa
            +Biến sẽ đặt tên theo quy camelcase  :hoTen, ngaySinh,tuThuNhatVietThuong
        
        */
        console.log(message);
        console.log(message);
        console.log(message);
        console.log(message);


        // kiểu dữ liệu primatitive value

        var stringHoTen = `Tran Quang Si`; // kiểu string thường được lưu tên người, desc....
        var numberLuong = 1000;   // kiểu number thường để lưu trữ giá trị tính toán được
        var boolean = true; // thường là true hoặc false
        // null là giá trị rỗng
        // undefined giá trị không xác định

        // Toán tử
        /*
            Toán tử số học : + - * / %

         */
        var a = 3;
        var b = 20;
        console.log(`Tong la: `, a + b);
        var tru = a = b;
        console.log(tru);
        var nhan = a * b;
        console.log(nhan);
        var thuong = a / b;
        console.log(thuong);
        var soChiaDu = b % a
        // 
        var diemToan = 10;
        var diemLy = +'1';
        var diemHoa = '5' * 1;
        var average = (diemToan + diemLy + diemHoa) / 3;
        console.log(average);

        // 
        /*
           +Số giờ làm việc
           +Số tiền làm việc của 1 giờ
           +In ra tiền lương

        */
        var soGioLam = + prompt('Hay nhap so gio lam');
        var tienCongMotGio = + prompt('Nhap vao tien cong gio lam')
        console.log('tienCongMotGio: ', tienCongMotGio);
        console.log('soGioLam: ', soGioLam);
        var tienLuong = soGioLam * tienCongMotGio
        console.log('tienLuong: ', tienLuong);
        