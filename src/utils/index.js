export function goAnchor(selector) {
    document.querySelector(selector).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
}