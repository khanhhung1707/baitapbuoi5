//bài 1
function handleDiem() {
    var diemChuan = +document.getElementById("diemChuan").value;
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = +document.getElementById("doiTuong").value;
    var mon1 = +document.getElementById("mon1").value;
    var mon2 = +document.getElementById("mon2").value;
    var mon3 = +document.getElementById("mon3").value;
    
    var diemKhuVuc = 0;
    var diemDoiTuong = 0;
    var diemTong;


    if (mon1 === 0) {
        document.getElementById("bai1__result").innerHTML = "Bạn đã rớt vì liệt";
        
    } else if (mon2 === 0) {
        document.getElementById("bai1__result").innerHTML = "Bạn đã rớt vì liệt";
        
    } else if (mon3 === 0) {
        document.getElementById("bai1__result").innerHTML = "Bạn đã rớt vì liệt";
        
    } else{

    //khu vực
    if (khuVuc === "A") {
        diemKhuVuc = 2;
    } else if (khuVuc === "B") {
        diemKhuVuc = 1;   
    } else if (khuVuc === "C") {
        diemKhuVuc = 0.5;
    } else {
        diemKhuVuc = 0;
    }
    
    //đối tượng
    if (doiTuong === 1) {
        diemDoiTuong = 2.5;
    } else if (doiTuong === 2) {
        diemDoiTuong = 1.5;   
    } else if (doiTuong === 3) {
        diemDoiTuong = 1;
    } else {
        diemDoiTuong = 0;
    }

    diemTong = mon1 + mon2 + mon3 + diemKhuVuc + diemDoiTuong;

    if (diemTong >= diemChuan) {
        document.getElementById("bai1__result").innerHTML = "Bạn đã đậu, điểm của bạn là: " + diemTong ;
    } else {
        document.getElementById("bai1__result").innerHTML = "Bạn đã rớt ";
    }
}
}


//bai 2
function handleTienDien() {
    var nameTienDien = document.getElementById("nameTienDien").value;
    var soKg = +document.getElementById("soKg").value;
    var tongTienDien;
    var giaTienKwDau = 500;
    var giaTienKw50Den100 = 650;
    var giaTienKw100Den200 = 850;
    var giaTienKw200Den350 = 1100;
    var giaTienKw350TroDi = 1300;

    if (soKg <= 50) {
        tongTienDien = giaTienKwDau*soKg;
    } else if(soKg <= 100 ){
        tongTienDien = giaTienKwDau*50 + giaTienKw50Den100 *(soKg-50);
    } else if(soKg <= 200) {
        tongTienDien = giaTienKwDau*50 + giaTienKw50Den100*50 + giaTienKw100Den200 *(soKg-100);
    } else if(soKg <= 350){
        tongTienDien = giaTienKwDau*50 + giaTienKw50Den100*50 + giaTienKw100Den200 *100 + giaTienKw200Den350*(soKg-200);
    } else {
        tongTienDien = giaTienKwDau*50 + giaTienKw50Den100*50 + giaTienKw100Den200 *100 + giaTienKw200Den350*150 + giaTienKw350TroDi*(soKg-350);
    }

    document.getElementById("bai2__result").innerHTML = "Họ tên: " + nameTienDien + "; Tiền điện: " +tongTienDien;
}

//bài 3
function handleTienThue() {
    var nameTienThue = document.getElementById("nameTienThue").value;
    var tongThuNhap = +document.getElementById("tongThuNhap").value;
    var tongTienThue;
    var giaDen60 = 0.05;
    var giaTren60Den120 = 0.1;
    var giaTren120Den210 = 0.15;
    var giaTren210Den384 = 0.2;
    var giaTren384Den624 = 0.25;
    var giaTren624Den960 = 0.3;
    var giaTu960TroDi = 0.35;

    if (tongThuNhap <= 60000000) {
        tongTienThue = tongThuNhap*giaDen60;
    } else if(tongThuNhap <= 120000000 ){
        tongTienThue = tongThuNhap*giaTren60Den120;
    } else if(tongThuNhap <= 210000000) {
        tongTienThue = tongThuNhap*giaTren120Den210;   
    } else if(tongThuNhap <= 384000000){
        tongTienThue = tongThuNhap*giaTren210Den384;
    } else if(tongThuNhap <= 624000000){
        tongTienThue = tongThuNhap*giaTren384Den624;
    } else if(tongThuNhap <= 960000000){
        tongTienThue = tongThuNhap*giaTren624Den960;
    } else {
        tongTienThue = tongThuNhap*giaTu960TroDi;
    }

    document.getElementById("bai3__result").innerHTML = "Họ tên: " + nameTienThue + "; Tiền Thuế: " +tongTienThue;
}