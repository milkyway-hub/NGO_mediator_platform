// Modal elements
const donationModal = document.getElementById("donation-modal");
const closeModal = document.getElementById("close-modal");
const donationForm = document.getElementById("donation-form");

// Function to show the modal with input fields
function showDonationDetails() {
    donationModal.style.display = "block";
}

// Close the modal when clicking the close button
closeModal.onclick = function() {
    donationModal.style.display = "none";
}

// Close the modal when clicking outside the modal
window.onclick = function(event) {
    if (event.target === donationModal) {
        donationModal.style.display = "none";
    }
}

// Handle the donation form submission
donationForm.onsubmit = function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const quantity = document.getElementById("donation-quantity").value;
    const address = document.getElementById("donation-address").value;
    const pickupTime = document.getElementById("donation-time").value;

    // You can now process or display the donation details
    alert(`Donation Details:
    Quantity: ${quantity}
    Address: ${address}
    Pickup Time: ${pickupTime}`);

    // Optionally close the modal after submission
    donationModal.style.display = "none";
}


// Function to handle page transitions (e.g., show login page)
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    const pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        pageToShow.style.display = 'block';
    }
}