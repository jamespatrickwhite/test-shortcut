class AppClockElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const clockTick = () => this.textContent = (new Date()).toString();
    clockTick();
    this._timer = setInterval(clockTick, 1000);
  }
  disconnectedCallback() {
    clearInterval(this._timer);
    this._timer = null;
  }
  
}
customElements.define('app-clock', AppClockElement);
export { AppClockElement as app };
