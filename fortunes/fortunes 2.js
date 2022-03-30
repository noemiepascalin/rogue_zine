import "../css/reset.css";
import "../css/style.css";
import "./fortunes.css";

function animateValue(obj, start, end, duration) {
<<<<<<< HEAD
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
/* */
const obj = document.getElementById("glitch");
animateValue(obj, 0, 252918387, 350);
=======
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.getElementById("sousangelo");
  animateValue(obj, 0, 252918387, 350);
  
>>>>>>> parent of 95189d1 (anim fortunes)
