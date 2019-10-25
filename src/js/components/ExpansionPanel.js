class ExpansionPanel {
  constructor(config) {
    this.config = { ...config };
  }

  init() {
    const { parent, toggleBtn, content } = this.config;
    const expansionPanelWrapper = document.querySelector(parent);
    this.expansionPanel = expansionPanelWrapper;

    //TODO add remove event listener
    expansionPanelWrapper.addEventListener("click", toggleExpansions);
  }

  destroy() {
    this.config = null;
    if (this.expansionPanel) {
      this.expansionPanel.removeEventListener("click", toggleExpansions);
    }
  }

  toggleExpansions(e) {
    const elem = e.target;
  }
}
