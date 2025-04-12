// Dropdown functionality
document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', function() {
        const dropdownMenu = this.querySelector('.dropdown-menu');
        dropdownMenu.classList.toggle('show');
    });
});

// Search functionality (example implementation)
document.getElementById('search-btn').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value;
    alert('Buscando por: ' + searchTerm);
});

