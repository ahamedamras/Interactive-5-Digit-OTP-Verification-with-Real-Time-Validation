const inputs = document.querySelectorAll(".otp-box input");
const message = document.getElementById("message");

inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        input.value = input.value.replace(/[^0-9]/g, "");
        if(input.value && index < inputs.length - 1){
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if(e.key === "Backspace" && !input.value && index > 0){
            inputs[index - 1].focus();
        }
    });
});

function verifyOTP(){
    let otp = "";
    inputs.forEach(input => otp += input.value);

    if(otp.length === 5){
        message.textContent = "OTP Verified";
    } else {
        message.textContent = "Enter complete OTP";
    }
}

function clearOTP(){
    inputs.forEach(input => input.value = "");
    inputs[0].focus();
    message.textContent = "";
}