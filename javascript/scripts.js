// on page load to set the current year in the footer
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById("form").reset();

});

function validate() {
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

    if (name === "") {
        document.getElementById("postcodeError").textContent = "Please enter a postcode";
        isValid = false;
    }

    console.log("Form submitted successfully with the following data:");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Phone Number: " + phoneNo); 

    return isValid; // Form is valid
}

document.getElementById("form").addEventListener("submit", function (e) {
  if (!validate()) {
    e.preventDefault(); // Prevent submission if not valid
  }
});