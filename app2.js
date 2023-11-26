function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var phone = document.getElementById("phone").value;
  
    
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Hãy điền thông tin");
      return false;
    }
  
  
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
      alert("Hãy nhập địa chỉ email");
      return false;
    }
  
   
    if (password.length < 8) {
      alert("Mật khẩu phải ít nhất có 8 chữ số");
      return false;
    }
  
   
    if (password !== confirmpassword) {
      alert("Mật khẩu không đúng");
      return false;
    }
  
   
    alert("Registration successful!");
    return true;
  }