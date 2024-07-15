const template = document.createElement('template');
template.innerHTML = `
  <div class="dob-container">
    <input type="text" maxlength="2" placeholder="MM" class="dob-input" id="month" />
    <span class="separator"> / </span>
    <input type="text" maxlength="2" placeholder="DD" class="dob-input" id="day" />
    <span class="separator"> / </span>
    <input type="text" maxlength="4" placeholder="YYYY" class="dob-input" id="year" />
  </div>
  <button id="age-verify-button">I AM 21</button>
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
      width: 100px;
      margin: 10px;
      padding: 10px 0;
      font-size: 35px;
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
    #age-verify-button {
      background-color: red;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 20px;
      cursor: pointer;
    }
  </style>
`;

class CustomDOBElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.getElementById('age-verify-button').addEventListener('click', this.verifyAge.bind(this));
  }

  disconnectedCallback() {
    this.shadowRoot.getElementById('age-verify-button').removeEventListener('click', this.verifyAge.bind(this));
  }

  verifyAge() {
    const month = this.shadowRoot.getElementById('month').value;
    const day = this.shadowRoot.getElementById('day').value;
    const year = this.shadowRoot.getElementById('year').value;
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age >= 21) {
      window.location.href = 'your-main-site-url-here'; // Replace with your main site URL
    } else {
      alert('You must be 21 or older to enter this site.');
    }
  }
}

customElements.define('custom-dob-element', CustomDOBElement);
