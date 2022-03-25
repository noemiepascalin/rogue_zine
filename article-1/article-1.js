import {
  wrapParagraphWords,
  selectWordElements,
  createDraggableCensor,
} from "../components/ParagraphCensors";

import "../css/reset.css";
import "../css/style.css";
import "./article-1.css";

wrapParagraphWords();
const selectedWordElement = selectWordElements(60);
createDraggableCensor(selectedWordElement);
