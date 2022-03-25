import {
  wrapParagraphWords,
  selectWordElements,
  createDraggableCensor,
} from "../components/ParagraphCensors";

import "../css/reset.css";
import "../css/style.css";
import "./article-2.css";

wrapParagraphWords();
const selectedWordElement = selectWordElements(100);
createDraggableCensor(selectedWordElement);
