// =========================
// GET ELEMENTS
// =========================

const cvForm = document.getElementById("cv-form");
const formContainer = document.getElementById("form-container");
const resumeContainer = document.getElementById("resume-container");


// =========================
// FORM SUBMIT
// =========================

cvForm.addEventListener("submit", function (e) {

    // Prevent page refresh
    e.preventDefault();

    // Get values from form
    const nameValue = document.getElementById("nameField").value.trim();
    const contactValue = document.getElementById("contactField").value.trim();
    const eduValue = document.getElementById("eduField").value.trim();
    const skillValue = document.getElementById("skillField").value.trim();


    // =========================
    // VALIDATION
    // =========================

    if (nameValue === "" || contactValue === "") {
        alert("Bhai, Name aur Phone number compulsory hai!");
        return;
    }


    // =========================
    // PUT DATA INTO RESUME
    // =========================

    document.getElementById("nameT").innerText = nameValue;
    document.getElementById("contactT").innerText = contactValue;
    document.getElementById("eduT").innerText = eduValue;
    document.getElementById("skillT").innerText = skillValue;


    // =========================
    // HIDE FORM
    // SHOW RESUME
    // =========================

    formContainer.style.display = "none";
    resumeContainer.style.display = "block";
});


// =========================
// PRINT RESUME
// =========================

const printButton = document.getElementById("print-btn");

printButton.addEventListener("click", function () {

    // Hide button before printing
    printButton.style.display = "none";

    // Open browser print dialog
    window.print();

    // Show button again after printing
    printButton.style.display = "block";
});