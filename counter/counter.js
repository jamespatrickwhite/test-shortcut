class AppCounterElement extends HTMLElement {
  constructor() {
    super();
    this._counter = 0;
  }
  connectedCallback() {
    if (this.innerHTML.trim() === '') {
      this.innerHTML = `
        <button> Add one </button> <span>0</span>
      `;
      this.querySelector('button').onclick = () => this.querySelector('span').textContent = ++this._counter;
    }
  }
}
customElements.define('app-counter', AppCounterElement);
export { AppCounterElement as app };
