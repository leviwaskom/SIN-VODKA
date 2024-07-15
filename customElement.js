class CustomElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .dob-container {
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Poppins Semi Bold', sans-serif;
          font-size: 35px;
        }
        .dob-input {
          border: none;
          background: transparent;
          color: white;
          text-align: center;
          width: 100px;
          margin: 10px;
          padding: 10px 0;
        }
        .separator {
          color: white;
          font-size: 35px;
          margin: 0 5px;
        }
        .dob-input::placeholder {
          color: white;
        }
        .dob-input:focus {
          outline: none;
        }
      </style>
      <div class="dob-container">
        <input id="month" type="text" maxlength="2" placeholder="MM" class="dob-input" />
        <span class="separator"> / </span>
        <input id="day" type="text" maxlength="2" placeholder="DD" class="dob-input" />
        <span class="separator"> / </span>
        <input id="year" type="text" maxlength="4" placeholder="YYYY" class="dob-input" />
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
              window.location.href = 'your-main-site-url-here'; // Replace with your main site URL
          } else {
              alert('You must be 21 or older to enter this site.');
          }
        });
      </script>
    `;
  }
}
customElements.define('custom-element', CustomElement);
