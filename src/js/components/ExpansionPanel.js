export default class ExpansionPanel {
  constructor(config) {
    this.config = { ...config };
    // this.checkConfig();
  }

  //TODO validate config!!
  // checkConfig() {
  //   const keys = Object.keys(this.config);
  //   const configKeys = ["parent", "toggleBtn", "content"];
  //   if (!keys.length) throw Error("Config is must be object with props");

  //   const notSpecifiedKeys = configKeys.reduce((acc, key) => {
  //     if (keys.includes(key)) return acc;
  //     return [...acc, key];
  //   }, []);

  //   if (notSpecifiedKeys.length) {
  //     throw Error(`Config not contains required keys: ${notSpecifiedKeys}`);
  //   }

  //   return true;
  // }

  init() {
    const { parent, toggleBtn, content } = this.config;
    this.wrapper = document.querySelector(`${parent}`);

    this.toggleButtons = this.wrapper.querySelectorAll(`${toggleBtn}`);
    this.content = content;

    this.addToggleEvent();
  }

  destroy() {
    this.config = null;
    this.wrapper = null;

    this.removeToggleEvents();

    this.toggleButtons = null;
    this.content = null;
  }

  addToggleEvent() {
    this.toggleButtons.forEach(btn => {
      btn.addEventListener("click", this.toggleExpansions);
    });
  }

  removeToggleEvents() {
    this.toggleButtons.forEach(btn => {
      btn.removeEventListener("click", this.toggleExpansions);
    });
  }

  // bind this
  toggleExpansions = e => {
    const btn = e.target;
    const btnTag = btn.tagName;
    const parent = e.target.parentElement;

    const content = parent.querySelector(`${btnTag} ~ ${this.content}`);
    //TODO make accordion
    if (!content)
      throw Error(
        "The Expansions content must on same level with toggle button"
      );

    content.classList.toggle("open");
    btn.classList.toggle("show-content");
  };
}
