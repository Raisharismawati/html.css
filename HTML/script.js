function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Logged in!');
    // Add logic to handle login
});

document.getElementById('updateProfileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Profile updated!');
    // Add logic to handle profile update
});