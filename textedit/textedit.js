class AppTextEditElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    if (this.innerHTML.trim() === '') {
      this.innerHTML = `
        <textarea rows="15" style="width: 100%"></textarea><br>
        <button>Save</button> <button class="reset">Reset</button>
      `;
      this.querySelector('.reset').onclick = () => this.querySelector('textarea').value = '';
    }
  }
}
customElements.define('app-textedit', AppTextEditElement);
export { AppTextEditElement as app };
