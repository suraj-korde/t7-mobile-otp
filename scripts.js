document.addEventListener('DOMContentLoaded', function() {
    const sendOtpButton = document.getElementById('sendOtp');
    const verifyOtpButton = document.getElementById('verifyOtp');
    const submitButton = document.getElementById('submitBtn');
    const otpSection = document.getElementById('otpSection');
    let otpSent = false;
    let otpVerified = false;

    // Function to send OTP
    sendOtpButton.addEventListener('click', function() {
        const mobileNumber = document.getElementById('mobileNumber').value;
        if (validateMobileNumber(mobileNumber)) {
            sendOtp(mobileNumber);
        } else {
            alert('Please enter a valid mobile number.');
        }
    });

    // Function to verify OTP
    verifyOtpButton.addEventListener('click', function() {
        const enteredOtp = document.getElementById('otp').value;
        if (validateOtp(enteredOtp)) {
            otpVerified = true;
            alert('OTP Verified Successfully!');
            otpSection.style.display = 'none';
            submitButton.style.display = 'block';
        } else {
            alert('Invalid OTP. Please try again.');
        }
    });

    // Form submission
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        if (!otpVerified) {
            event.preventDefault();
            alert('Please verify your mobile number first.');
        }
    });

    // Mobile number validation
    function validateMobileNumber(mobileNumber) {
        const mobileRegex = /^[0-9]{10}$/;
        return mobileRegex.test(mobileNumber);
    }

    // OTP validation
    function validateOtp(otp) {
        // This is just a dummy validation. Replace with actual OTP validation logic.
        return otp === '123456';
    }

    // Dummy function to send OTP
    function sendOtp(mobileNumber) {
        // Replace with actual OTP sending logic
        alert(`OTP sent to ${mobileNumber}. Use '123456' for demo purposes.`);
        otpSection.style.display = 'block';
    }
});
