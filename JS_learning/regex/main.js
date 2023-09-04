/* 
    form validations

    validate input form from user
*/

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('register').addEventListener('submit', function(e) {

        // phone number
        let phoneNumber = document.getElementById('phone').value;

        // validation pattern  // phone should be like this patter (1234) 123-4567
        let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/;

        let validationResult = phoneRe.test(phoneNumber);

        if (validationResult !== true) {
            // dont send data
            e.preventDefault();
            return false
        }

        // return true fro submition
        return true

    })

});