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


document.getElementsByClassName('share-button').addEventListener('click', function() {
  const score = 4;
  const total = 5;
  const shareText = `I scored ${score} out of ${total} on this quiz!`;
  const url = window.location.href;

  // Sharing manually via a prompt
  const sharePrompt = `\n\nYou can share this link: Result share`;
  
  // Show prompt with share text for manual sharing
  prompt("Copy this text to share your results:", sharePrompt);
});