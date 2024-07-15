document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('age-verify-button').addEventListener('click', function () {
    var month = document.getElementById('month').value;
    var day = document.getElementById('day').value;
    var year = document.getElementById('year').value;
    var today = new Date();
    var birthDate = new Date(year, month - 1, day);

    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age >= 21) {
      window.location.href = 'your-main-site-url-here'; // Replace with your main site URL
    } else {
      alert('You must be 21 or older to enter this site.');
    }
  });
});
