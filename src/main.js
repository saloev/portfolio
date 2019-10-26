import "./scss/main.scss";

import { ExpansionPanel, Scroll } from "./js/components/components";

const expansionPanel = () => {
  const newCollapse = new ExpansionPanel({
    parent: ".expansion-panel__parent",
    toggleBtn: ".expansion-panel__toggle-btn",
    content: ".expansion-panel__toggle-content"
  });

  newCollapse.init();
};

const init = () => {
  //
  expansionPanel();
};

window.addEventListener("DOMContentLoaded", init);
