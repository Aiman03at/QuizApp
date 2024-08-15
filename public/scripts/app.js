// Client facing scripts here
document.querySelectorAll('.dropdown-btn').forEach(function(button) {
  button.addEventListener('click', function() {
    this.parentElement.classList.toggle('show');
  });
});


