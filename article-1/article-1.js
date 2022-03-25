import {
  wrapParagraphWords,
  selectWordElements,
  createDraggableCensor,
} from "../components/ParagraphCensors";

import "../css/reset.css";
import "../css/style.css";

wrapParagraphWords();
const selectedWordElement = selectWordElements(60);
createDraggableCensor(selectedWordElement);
