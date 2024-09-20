let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let submitButton = document.querySelector("#sub");
    let messageBox = document.querySelector("#msg");

    submitButton.value = "Submitting...";
    submitButton.disabled = true;
    messageBox.innerHTML = "";

    let data = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbz3Kt_1piWILeD81mLcFv7hv2NboqxaNtnS8bGPVw2fJjXmFlY3sZC27AqMqHCJ_uunhg/exec', {
        method: "POST",
        body: data
    })
    .then(res => res.text())
    .then(data => {
        messageBox.innerHTML = data;
        submitButton.value = "Submit";
        submitButton.disabled = false;
        form.reset();

        // Store in localStorage that the form was submitted
        localStorage.setItem("formSubmitted", "true");

        // Comment out or remove the redirection to about.html
        // window.location.href = "about.html";
    })
    .catch(error => {
        messageBox.innerHTML = "An error occurred: " + error.message;
        submitButton.value = "Submit";
        submitButton.disabled = false;
    });
});

// Check if the form was already submitted
document.addEventListener("DOMContentLoaded", () => {
    // Remove the redirection to about.html if form was already submitted
    // if (localStorage.getItem("formSubmitted") === "true") {
    //     window.location.href = "about.html";
    // }
});
