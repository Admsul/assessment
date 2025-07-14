// on page load to set the current year in the footer
window.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById("form").reset();

});

function validate(event) {

    // Get all necessary variables
    const name = document.forms["basicForm"]["name"].value;
    const email = document.forms["basicForm"]["email"].value;
    const phoneNo = document.forms["basicForm"]["phoneNo"].value;
    const postcode = document.forms["basicForm"]["postcode"].value;

    // clear any previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneNoError").textContent = "";
    document.getElementById("postcodeError").textContent = "";

    // Initialize a variable to track if the form is valid
    let isValid = true;

    // Check if any field has been left empty
    if (name === "") {

        document.getElementById("nameError").textContent = "Please enter a name";
        isValid = false;

    }

    //  phone number validation 
    const phoneNoPattern = /^\d{1,11}$/;

    if (!phoneNoPattern.test(phoneNo)) {

        document.getElementById("phoneNoError").textContent = "Please enter a valid phone number";
        isValid = false;

    }

    //  email validation can also use text.includes()
    const gmailPattern = /^[^\s@]+@gmail\.com$/;
    const outlookPattern = /^[^\s@]+@outlook\.com$/;

    if (!gmailPattern.test(email) && !outlookPattern.test(email)) {

        document.getElementById("emailError").textContent = "Please enter a valid email address (Gmail or Outlook)";
        isValid = false;

    }

    if (postcode === "") {

        document.getElementById("postcodeError").textContent = "Please enter a postcode";
        isValid = false;

    }

    console.log("Validation complete. Is form valid? " + isValid);

    // return isValid; // Form is valid
    if (!isValid) {

        // Prevent form submission if not valid
        if (event) event.preventDefault();
        console.log("Form submission prevented due to validation errors.");

    } else {

        console.log("Form submitted successfully with the following data:");
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Phone Number: " + phoneNo);
        console.log("Postcode: " + postcode);

    }

}

// Hamburger menu style navbar
function toggleMenu() {

    const box = document.getElementById('nav-menu');
    const btn = document.getElementById('hamburgerButton');

    if (box.style.display === 'none' || box.style.display === '') {

        box.style.display = 'block';
        btn.style.display = 'none';

    } else {

        box.style.display = 'none';

    }
};