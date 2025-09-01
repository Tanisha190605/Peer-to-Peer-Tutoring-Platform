function acceptRequest(btn) {
  alert("Request Accepted");
  btn.parentElement.remove();
}

function rejectRequest(btn) {
  alert("Request Rejected");
  btn.parentElement.remove();
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("availability-form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Seat Availability Saved");
    });
  }
});