import { sampleSize } from "lodash";

import { DragElement } from "./DragElement";

export const wrapParagraphWords = function () {
  const paragraph = document.querySelectorAll("p");
  let count = 0;
  paragraph.forEach((p) => {
    let words = p.textContent
      .split(/\s/)
      .map(function (word) {
        if (word.length > 0) {
          count++;
          return `<span data-index='${count}'>${word}</span>`;
        }
      })
      .join(" ");
    p.innerHTML = words;
  });

  return count;
};

export const selectWordElements = function (n) {
  const wordNodeList = document.querySelectorAll("p span");
  const r = sampleSize(wordNodeList, n);
  return r;
};

export const createDraggableCensor = function (selectedWordElement) {
  selectedWordElement.forEach((el) => {
    el.classList.add("active");
    let draggableElement = document.createElement("div");
    draggableElement.classList.add("draggable");
    draggableElement.setAttribute("draggable", "true");
    el.appendChild(draggableElement);
    DragElement(draggableElement);
  });
};
