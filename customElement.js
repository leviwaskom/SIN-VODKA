<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Age Verification</title>
    <style>
        .dob-container {
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Poppins Semi Bold', sans-serif;
        }

        .dob-input {
            border: none;
            background: transparent;
            color: white;
            text-align: center;
            width: 100px; /* Adjusted width */
            margin: 10 10px; /* Adjusted margin for even spacing */
            padding: 10px 0; /* Adjusted padding to center the text */
            font-size: 35px; /* Adjusted font size */
        }

        .separator {
            color: white;
            font-size: 35px; /* Ensure separator is the same size */
            margin: 0 5px; /* Adjusted margin for even spacing */
        }

        .dob-input::placeholder {
            color: white;
        }

        .dob-input:focus {
            outline: none;
        }
    </style>
</head>
<body>
    <div class="dob-container">
        <input type="text" maxlength="2" placeholder="MM" id="month" class="dob-input" />
        <span class="separator"> / </span>
        <input type="text" maxlength="2" placeholder="DD" id="day" class="dob-input" />
        <span class="separator"> / </span>
        <input type="text" maxlength="4" placeholder="YYYY" id="year" class="dob-input" />
    </div>
    <button id="age-verify-button">I AM 21</button>
    <script>
        document.getElementById('age-verify-button').addEventListener('click', function() {
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
                // Code to redirect to the main site or close the lightbox
                window.location.href = 'your-main-site-url-here'; // Replace with your main site URL
            } else {
                alert('You must be 21 or older to enter this site.');
            }
        });
    </script>
</body>
</html>
