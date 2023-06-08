//! TO USE IT => ToUp("width", "height", "padding", "borderRaduis", "bottomValue", "pose", "poseValue", "backgroundColor", "arrowSize", "arrowColor")
//! Don't forget => type="module"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom/client";

let buddy = document.querySelector("body");

function ToUp(
  width = "40",
  height = "40",
  padding = "10",
  borderRadius = "20",
  bottomValue = "30",
  pose = "right",
  poseValue = "30",
  backgroundColor = "red",
  arrowSize = "20",
  arrowColor = "black"
) {
  let btn = document.createElement("button");
  btn.classList.add("ToUp");

  const btnRoot = ReactDOM.createRoot(btn);
  btnRoot.render(<FontAwesomeIcon icon={faAnglesUp} />)

  btn.style.display = "none";
  btn.style.color = arrowColor;
  btn.style.fontSize = arrowSize + "px";
  btn.style.position = "fixed";
  btn.style.bottom = bottomValue + "px";
  if (pose == "right") {
    btn.style.right = poseValue + "px";
  } else if (pose == "left") {
    btn.style.left = poseValue + "px";
  }
  btn.style.width = width + "px";
  btn.style.height = height + "px";
  btn.style.padding = padding + "px";
  btn.style.borderRadius = borderRadius + "px";
  btn.style.backgroundColor = backgroundColor;
  btn.style.border = "none";
  btn.style.zIndex = "999999";
  btn.style.cursor = "pointer";
  buddy.append(btn);

  window.onscroll = () => {
    if (window.scrollY >= "500") {
      btn.style.display = "flex";
      btn.style.justifyContent = "center";
      btn.style.alignItems = "center";
    } else {
      btn.style.display = "none";
    }
  };

  btn.onclick = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
}

export default ToUp;
