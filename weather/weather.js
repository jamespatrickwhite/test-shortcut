class AppWeatherElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    if (this.innerHTML.trim() === '') {
      this.innerHTML = `
        <h1>It's still sunny!</h1>
      `;
    }
  }
}
customElements.define('app-weather', AppWeatherElement);
export { AppWeatherElement as app };
