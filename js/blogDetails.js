/* Blog Page Link Copy PopUp Start */

document.getElementById("copyLinkBtn").addEventListener("click", function (e) {
    e.preventDefault();

    navigator.clipboard.writeText(window.location.href);

    const popup = document.getElementById("copyPopup");

    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 5000);
});

/* Blog Page Link Copy PopUp End */



/* Follow Us Start */

const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");
const newsletterPopup = document.getElementById("newsletterPopup");

newsletterForm.addEventListener("submit", function(e) {
    e.preventDefault();

    newsletterPopup.style.display = "block";

    setTimeout(() => {
        newsletterPopup.style.display = "none";
    }, 5000);

    newsletterEmail.value = "";
});

/* Follow Us End */



