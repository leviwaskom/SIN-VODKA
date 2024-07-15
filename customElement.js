class SimpleElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .test-container {
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Poppins Semi Bold', sans-serif;
          font-size: 35px;
          color: white;
        }
      </style>
      <div class="test-container">
        <p>This is a test.</p>
      </div>
    `;
  }
}

customElements.define('simple-element', SimpleElement);
