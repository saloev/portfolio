export default class IframeModal {
  constructor(modalBtn) {
    this.modalBtn = modalBtn;
  }

  init() {
    this.modalButtons = document.querySelectorAll(`${this.modalBtn}`);

    this.modalButtons.forEach(elem => {
      elem.addEventListener("click", this.toggleModal);
    });
  }

  destroy() {
    this.modalButtons.forEach(elem => {
      elem.removeEventListener("click", this.toggleModal);
    });

    const getIframe = document.body.querySelector("body > .iframe-modal");

    if (getIframe) {
      getIframe.parentElement.removeChild();
    }
  }

  setIframeSizes(iframe) {
    iframe.style.width = `${this.width}px`;
    iframe.style.height = `${this.height}px`;
  }

  changeIframeView = () => {
    const isMobile = this.iframe.classList.toggle("mobile");
    const newText = isMobile ? "show desktop" : "show mobile";
    console.log(newText, this.iframe.innerText);

    this.iframe.innerText = newText;
  };

  closeModal = e => {
    const body = document.body;

    const getIframe = body.querySelector("body > .iframe-modal");

    if (!getIframe) {
      console.warn("elem not found in DOM");
      return;
    }

    body.classList.toggle("hide-scroll");
    this.iframeLoader.classList.remove("off");

    getIframe.classList.remove("show");
  };

  iframeLoad = e => {
    this.iframeLoader.classList.add("off");
  };

  toggleModal = e => {
    const btn = e.target;
    const typeOfIframe = btn.dataset.frameType;

    if (!typeOfIframe)
      throw Error(
        "modal button must contain a data attribute with type of Iframe"
      );
    const body = document.body;
    body.classList.toggle("hide-scroll");

    const getIframe = body.querySelector("body > .iframe-modal");

    if (getIframe) {
      const iframe = getIframe.querySelector("iframe");
      iframe.src = `./projects/${typeOfIframe}/index.html`;

      const isIframeVisible = getIframe.classList.toggle("show");

      return;
    }

    const fragment = document.createDocumentFragment();

    const modal = document.createElement("div");
    modal.classList.add("iframe-modal", "show");

    const iframe = document.createElement("iframe");
    iframe.src = `./projects/${typeOfIframe}/index.html`;
    iframe.classList.add("iframe");

    iframe.addEventListener("load", this.iframeLoad);

    modal.appendChild(iframe);

    const toggleBtn = document.createElement("button");
    toggleBtn.classList.add("iframe__toggle-btn");
    toggleBtn.innerHTML = "&times;";
    toggleBtn.addEventListener("click", this.closeModal);

    modal.appendChild(toggleBtn);

    if (window.innerWidth >= 768) {
      const toggleViewBtn = document.createElement("button");
      toggleViewBtn.innerText = "show mobile";
      toggleViewBtn.classList.add("iframe__toggle-view-btn");
      toggleViewBtn.addEventListener("click", this.changeIframeView);
      modal.appendChild(toggleViewBtn);
    }

    const iframeLoader = document.createElement("div");
    iframeLoader.innerHTML = `<!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
    <svg width="45" height="45" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
        <g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2">
            <circle cx="22" cy="22" r="6" stroke-opacity="0">
                <animate attributeName="r"
                     begin="1.5s" dur="3s"
                     values="6;22"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="stroke-opacity"
                     begin="1.5s" dur="3s"
                     values="1;0" calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="stroke-width"
                     begin="1.5s" dur="3s"
                     values="2;0" calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="22" cy="22" r="6" stroke-opacity="0">
                <animate attributeName="r"
                     begin="3s" dur="3s"
                     values="6;22"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="stroke-opacity"
                     begin="3s" dur="3s"
                     values="1;0" calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="stroke-width"
                     begin="3s" dur="3s"
                     values="2;0" calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="22" cy="22" r="8">
                <animate attributeName="r"
                     begin="0s" dur="1.5s"
                     values="6;1;2;3;4;5;6"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
        </g>
    </svg>`;
    iframeLoader.classList.add("iframe__loader");
    this.iframeLoader = iframeLoader;
    modal.appendChild(iframeLoader);

    fragment.appendChild(modal);

    body.appendChild(fragment);

    this.iframe = iframe;
  };
}
