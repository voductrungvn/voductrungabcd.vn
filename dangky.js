function dangky(){
    var thanhcong = true;
    var tendangnhap = document.form.dangnhap.value;
    var hovaten = document.form.hovaten.value;
    var password = document.form.password.value;
    var number = document.form.sodienthoai.value;
    var diachinha = document.form.diachigiaohang.value;
  
    if(tendangnhap.length<6 || tendangnhap.length>30){
        thanhcong=false;
        document.getElementById("tendangnhap").innerText="Tên đăng nhập phải lớn hơn 6 ký tự và nhỏ hơn 30 ký tự";
    }
    if(tendangnhap.length==0){
        thanhcong=false;
        document.getElementById("tendangnhap").innerText="Vui lòng điền tên đăng nhập";
    }
    if(password==""){
        thanhcong=false;
        document.getElementById("password").innerText="Vui lòng điền mật khẩu";
    }
    if(hovaten.length<6 || hovaten.length>30){
        thanhcong=false;
        document.getElementById("hovaten").innerText="Họ và tên phải lớn hơn 6 ký tự và nhỏ hơn 30 ký tự";
    }
    if(isNaN(number)==true || number==""){
        thanhcong=false;
        document.getElementById("number").innerText="Số điện thoại phải ghi bằng số";
    }
    if(number==""){
        thanhcong=false;
        document.getElementById("number").innerText="Vui lòng điện số điện thoại";
    }
    if(diachinha==""){
        thanhcong=false;
        document.getElementById("diachigiaohang").innerText="Vui lòng nhập địa chỉ giao hàng";
    }
    
    return thanhcong;
}