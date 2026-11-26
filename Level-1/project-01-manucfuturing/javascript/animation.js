(() => {
  const animationStyles = document.createElement("style");
  animationStyles.textContent = `
    .scroll-reveal {
      opacity: 0;
      transform: translate3d(0, 24px, 0) scale(0.985);
      filter: blur(6px);
      transition:
        opacity 700ms cubic-bezier(0.2, 0.7, 0.2, 1),
        transform 700ms cubic-bezier(0.2, 0.7, 0.2, 1),
        filter 700ms cubic-bezier(0.2, 0.7, 0.2, 1);
      transition-delay: var(--reveal-delay, 0ms);
      will-change: opacity, transform, filter;
    }

    .scroll-reveal.is-visible {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
      filter: blur(0);
    }

    @media (prefers-reduced-motion: reduce) {
      .scroll-reveal,
      .scroll-reveal.is-visible {
        opacity: 1;
        transform: none;
        filter: none;
        transition: none;
      }
    }
  `;
  document.head.appendChild(animationStyles);

  const revealSelector = [
    ".Halaman-Judul img",
    ".Halaman-Judul h1",
    ".Nav-desktop li",
    "#Tombol-Masuk",
    ".Hero-Judul > *",
    ".button-hero > *",
    "[data-scroll-reveal]",
  ].join(",");

  const revealedElements = new WeakSet();

  function prepareRevealElements(root = document) {
    const elements = root.querySelectorAll(revealSelector);

    elements.forEach((element, index) => {
      if (revealedElements.has(element)) return;
      revealedElements.add(element);
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 90}ms`);

      if (observer) observer.observe(element);
      else element.classList.add("is-visible");
    });
  }

  const observer = "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle("is-visible", entry.isIntersecting);
          });
        },
        {
          threshold: 0.14,
          rootMargin: "0px 0px -8% 0px",
        },
      )
    : null;

  prepareRevealElements();

  const contentObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.matches(revealSelector)) {
            prepareRevealElements(node.parentElement ?? document);
          } else {
            prepareRevealElements(node);
          }
        }
      });
    });
  });

  contentObserver.observe(document.body, { childList: true, subtree: true });
})();
