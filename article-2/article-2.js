import {
  wrapParagraphWords,
  selectWordElements,
  createDraggableCensor,
} from "../components/ParagraphCensors";

import "../css/reset.css";
import "../css/style.css";

wrapParagraphWords();
const selectedWordElement = selectWordElements(100);
createDraggableCensor(selectedWordElement);
