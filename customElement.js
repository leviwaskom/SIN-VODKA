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
        </style>
        <div class="dob-container">
            <input type="text" id="month" maxlength="2" placeholder="MM" class="dob-input" />
            <span class="separator">/</span>
            <input type="text" id="day" maxlength="2" placeholder="DD" class="dob-input" />
            <span class="separator">/</span>
            <input type="text" id="year" maxlength="4" placeholder="YYYY" class="dob-input" />
            <button id="age-verify-button" class="dob-input">I AM 21</button>
        </div>
        `;
    }
}

customElements.define('custom-element', CustomElement);
