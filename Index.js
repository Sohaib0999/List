var check_box = document.getElementById("pass-check");
var password_in = document.getElementById("password-input");

function checked_func() {
    if (check_box.checked == true) {
        password_in.type = "text";
    } else {
        password_in.type = "password";
    }
}