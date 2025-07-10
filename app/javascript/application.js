// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

// This indicates a security breach. Implement PR reviews to catch injections.
//  Recommended actions:
//   - Audit all JavaScript files for other injections
//   - Review access logs to identify the breach source
//   - Implement monitoring for unauthorized code changes

function showWelcomeAlert() {
  if (!sessionStorage.getItem("welcomeAlertShown")) {
    alert("Welcome to the Quiz!");
    sessionStorage.setItem("welcomeAlertShown", "true");
  }
}

document.addEventListener("DOMContentLoaded", showWelcomeAlert);