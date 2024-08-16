// Client facing scripts here
document.querySelectorAll('.dropdown-btn').forEach(function(button) {
  button.addEventListener('click', function() {
    this.parentElement.classList.toggle('show');
  });
});


function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    alert('Copied to clipboard!');
  }, function(err) {
    alert('Failed to copy text: ', err);
  });
}
