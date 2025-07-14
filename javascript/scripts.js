// on page load to dynamically set the current year in the footer
window.addEventListener('DOMContentLoaded', function() {

    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById("form").reset();

});

// Function to validate the form
function validate(event) {

    // Get all necessary variables
    const name = document.forms["basicForm"]["name"].value.trim();
    const email = document.forms["basicForm"]["email"].value.trim();
    const phoneNo = document.forms["basicForm"]["phoneNo"].value.trim();
    const postcode = document.forms["basicForm"]["postcode"].value.trim();

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

    //  phone number validation using regex
    // 1-11 digits, no letters or special characters
    const phoneNoPattern = /^\d{1,11}$/;

    if (!phoneNoPattern.test(phoneNo)) {

        document.getElementById("phoneNoError").textContent = "Please enter a valid phone number";
        isValid = false;

    }

    //  email validation can also use text.includes()
    //  only Gmail and Outlook are allowed
    const gmailPattern = /^[^\s@]+@gmail\.com$/;
    const outlookPattern = /^[^\s@]+@outlook\.com$/;

    if (!gmailPattern.test(email) && !outlookPattern.test(email)) {

        document.getElementById("emailError").textContent = "Please enter a valid email address (Gmail or Outlook)";
        isValid = false;

    }

    // check is postcode is empty
    // possibility to add postcode lookup in the future
    if (postcode === "") {

        document.getElementById("postcodeError").textContent = "Please enter a postcode";
        isValid = false;

    }

    // visual feedback for form validation
    console.log("Validation complete. Is form valid? " + isValid);

    // return isValid; // Form is valid
    if (!isValid) {

        // Prevent form submission if not valid
        if (event) event.preventDefault();
        console.log("Form submission prevented due to validation errors.");

    } else {

        // results from the form are dynamically displayed in the div with id formData on the page
        let output = 
            `<div class="container">
                <h3>Form Result</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phoneNo}</p>
                <p><strong>Postcode:</strong> ${postcode}</p>
            </div>`;
    
        document.getElementById('formData').innerHTML = output;
    }

}

// Hamburger menu style navbar
function toggleMenu() {

    // Get the menu and buttons 
    const menu = document.getElementById('nav-menu');
    const btn = document.getElementById('hamburgerButton');
    const close = document.getElementById('closeButton');

    // when clicked is the menu is hidden show it 
    // hide the hamburger button
    // show the close button
    if (menu.style.display === 'none' || menu.style.display === '') {

        menu.style.display = 'block';
        btn.style.display = 'none';
        close.style.display = 'block';

    } else {

        // here it does the reverse the menu is hidden if showing
        // show the hamburger button
        // hide the close button
        menu.style.display = 'none';
        btn.style.display = 'block';
        close.style.display = 'none';

    }
};