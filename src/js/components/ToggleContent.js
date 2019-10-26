export default class ToggleContent {
  constructor(content, toggleElem) {
    this.content = content;
    this.toggleElem = toggleElem;
  }

  init() {
    document.querySelectorAll(`${this.toggleElem}`).forEach(elem => {
      elem.addEventListener("click", this.toggleContent);
    });
  }

  destroy() {
    document.querySelectorAll(`${this.toggleElem}`).forEach(elem => {
      elem.removeEventListener("click", this.toggleContent);
    });
  }

  toggleContent = e => {
    const btn = e.target;
    const parent = btn.parentElement;

    const content = parent.querySelector(`${this.content}`);
    if (!content) {
      throw Error("Content must be in parent of toggle btn");
    }

    content.classList.toggle("show-desc");
  };
}
