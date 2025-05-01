document.getElementById("booking-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Check if user is logged in
    if (!localStorage.getItem('isLoggedIn')) {
        alert("You must be logged in to book a room.");
        window.location.href = "login.html";
        return;
    }

    const name = this.elements[0].value;
    const email = this.elements[1].value;
    const room = this.elements[2].value;
    const date = this.elements[3].value;

    const confirmation = document.getElementById("confirmation");

    if (name && email && room && date) {
        confirmation.innerText = `Thank you ${name}, your booking for the number ${room} of ${date} has been confirmed!`;
        confirmation.style.color = "green";
        this.reset();
    } else {
        confirmation.innerText = "Please fill in all fields.";
        confirmation.style.color = "red";
    }
});

// Scroll to booking form when "Book Now" button is clicked
document.querySelectorAll('.book-now-btn').forEach(button => {
    button.addEventListener('click', () => {
        const bookingSection = document.getElementById('booking');
        if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll to rooms section when "Explore Now" button is clicked
document.querySelectorAll('.new-action-btn').forEach(button => {
    button.addEventListener('click', () => {
        const roomsSection = document.getElementById('rooms');
        if (roomsSection) {
            roomsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
