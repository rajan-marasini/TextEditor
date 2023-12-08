const text = document.getElementById("text");
const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const underline = document.getElementById("underline");
const alignLeft = document.getElementById("align-left");
const alignCenter = document.getElementById("align-center");
const alignRight = document.getElementById("align-right");
const alignJustify = document.getElementById("align-justify");
const clearText = document.getElementById("clear");
const transformText = document.getElementById("transform");
const fontSize = document.getElementById("font-size");
const fontColor = document.getElementById("font-color");

bold.addEventListener("click", () => {
    text.style.fontWeight = text.style.fontWeight == "bold" ? "normal" : "bold";

    bold.style.background =
        text.style.fontWeight == "bold" ? "#73b1e333" : "white";

    bold.style.color = text.style.fontWeight == "bold" ? "#5271ff" : "black";
});

italic.addEventListener("click", () => {
    text.style.fontStyle =
        text.style.fontStyle == "italic" ? "normal" : "italic";

    italic.style.background =
        text.style.fontStyle == "italic" ? "#73b1e333" : "white";

    italic.style.color = text.style.fontStyle == "italic" ? "#5271ff" : "black";
});

underline.addEventListener("click", () => {
    text.style.textDecoration =
        text.style.textDecoration == "underline" ? "none" : "underline";

    underline.style.background =
        text.style.textDecoration == "underline" ? "#73b1e333" : "white";

    underline.style.color =
        text.style.textDecoration == "underline" ? "#5271ff" : "black";
});

alignLeft.addEventListener("click", () => {
    text.style.textAlign = "left";

    alignLeft.style.background = "#73b1e333";
    alignLeft.style.color = "#5271ff";

    alignCenter.style.background = "white";
    alignCenter.style.color = "black";

    alignRight.style.background = "white";
    alignRight.style.color = "black";

    alignJustify.style.background = "white";
    alignJustify.style.color = "black";
});

alignCenter.addEventListener("click", () => {
    text.style.textAlign = "center";

    alignLeft.style.background = "white";
    alignLeft.style.color = "black";

    alignCenter.style.background = "#73b1e333";
    alignCenter.style.color = "#5271ff";

    alignRight.style.background = "white";
    alignRight.style.color = "black";

    alignJustify.style.background = "white";
    alignJustify.style.color = "black";
});

alignRight.addEventListener("click", () => {
    text.style.textAlign = "right";

    alignLeft.style.background = "white";
    alignLeft.style.color = "black";

    alignCenter.style.background = "white";
    alignCenter.style.color = "black";

    alignRight.style.background = "#73b1e333";
    alignRight.style.color = "#5271ff";

    alignJustify.style.background = "white";
    alignJustify.style.color = "black";
});

alignJustify.addEventListener("click", () => {
    text.style.textAlign = "justify";

    alignLeft.style.background = "white";
    alignLeft.style.color = "black";

    alignCenter.style.background = "white";
    alignCenter.style.color = "black";

    alignRight.style.background = "white";
    alignRight.style.color = "black";

    alignJustify.style.background = "#73b1e333";
    alignJustify.style.color = "#5271ff";
});

clearText.addEventListener("click", () => {
    text.value = "";
});

transformText.addEventListener("click", () => {
    transformText.style.background =
        text.style.textTransform == "uppercase" ? "white" : "#73b1e333";
    transformText.innerHTML =
        text.style.textTransform == "uppercase" ? "aA" : "Aa";
    text.style.textTransform =
        text.style.textTransform == "uppercase" ? "lowercase" : "uppercase";
});

fontSize.addEventListener("change", () => {
    text.style.fontSize = fontSize.value + "px";
});

fontColor.addEventListener("change", () => {
    text.style.color = fontColor.value;
});
