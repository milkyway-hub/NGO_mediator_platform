document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("donation-modal");
    const closeModal = document.getElementById("close-modal");
    const amountField = document.getElementById("amount-field");
    const quantityField = document.getElementById("quantity-field");
    const donationTitle = document.getElementById("donation-title");

    // Function to show the modal with specific content
    function showDonationDetails(type) {
        modal.style.display = "block";

        // Reset visibility of fields
        amountField.style.display = "none";
        quantityField.style.display = "none";

        // Update modal content based on the donation type
        if (type === "money") {
            donationTitle.textContent = "Enter Donation Amount and Details";
            amountField.style.display = "block"; // Show amount field for money
        } else {
            donationTitle.textContent = "Enter Donation Quantity and Details";
            quantityField.style.display = "block"; // Show quantity field for other types
        }
    }

    // Event listeners for donation options
    document.getElementById("donateMoney").onclick = () => showDonationDetails("money");
    document.getElementById("donateClothes").onclick = () => showDonationDetails("clothes");
    document.getElementById("donateFood").onclick = () => showDonationDetails("food");
    document.getElementById("donateBooks").onclick = () => showDonationDetails("books");

    // Close the modal
    closeModal.onclick = () => {
        modal.style.display = "none";
    };

    // Close modal when clicking outside of it
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});