// on page load to set the current year in the footer
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('year').textContent = new Date().getFullYear();
});

function validate() {
    const name = document.forms["basicForm"]["name"].value;
    const email = document.forms["basicForm"]["email"].value;
    const phoneNo = document.forms["basicForm"]["phoneNo"].value;
    const postcode = document.forms["basicForm"]["postcode"].value;

    // Check if any field has been left empty
    if (name === "" || email === "" || phoneNo === "" || postcode === "") {
        alert("All fields must be filled out");
        return false;
    }

    //  phone number validation 
    const phoneNoPattern = /^\d{1,11}$/;

    if (!phoneNoPattern.test(phoneNo)) {
        alert("Please enter a valid Phone number");
        document.getElementById("form").reset();
        return false;
    }

    //  email validation can also use text.includes()
    const gmailPattern = /^[^\s@]+@gmail\.com$/;
    const outlookPattern = /^[^\s@]+@outlook\.com$/;

    if (!gmailPattern.test(email) && !outlookPattern.test(email)) {
        alert("Please enter a valid Gmail or Outlook email address");
        document.getElementById("form").reset();
        return false;
    }

    console.log("Form submitted successfully with the following data:");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Phone Number: " + phoneNo); 

    return true; // Form is valid
}