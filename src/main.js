import "./scss/main.scss";

import Glide from "@glidejs/glide";

import {
  ExpansionPanel,
  Scroll,
  ToggleContent
} from "./js/components/components";

const expansionPanel = () => {
  const newCollapse = new ExpansionPanel({
    parent: ".expansion-panel__parent",
    toggleBtn: ".expansion-panel__toggle-btn",
    content: ".expansion-panel__toggle-content"
  });

  newCollapse.init();
};

const slider = () => {
  new Glide(".glide").mount();
};

const toggleSliderContent = () => {
  const newToggleContent = new ToggleContent(
    ".project-content__content",
    ".project-content__btn"
  );

  newToggleContent.init();
};

const init = () => {
  //
  expansionPanel();

  //slider
  slider();

  // toggle content
  toggleSliderContent();
};

window.addEventListener("DOMContentLoaded", init);
