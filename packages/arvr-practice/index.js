import aframe from "aframe";

var boxEl = document.querySelector("a-box");
boxEl.addEventListener("mouseenter", function () {
  boxEl.setAttribute("scale", { x: 2, y: 2, z: 2 });
});
