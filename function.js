function alert_paragraph_color() {
    // Read border values
    let r = document.getElementById("border_R").value;
    let g = document.getElementById("border_G").value;
    let b = document.getElementById("border_B").value;
    let borderWidth = document.getElementById("border_width").value;

    // Read background values
    let br = document.getElementById("bg_R").value;
    let bg = document.getElementById("bg_G").value;
    let bb = document.getElementById("bg_B").value;

    // Build CSS colors
    let borderColor = "rgb(" + r + "," + g + "," + b + ")";
    let backgroundColor = "rgb(" + br + "," + bg + "," + bb + ")";

    // Apply to paragraph div
    let box = document.getElementById("paragraph");
    box.style.borderColor = borderColor;
    box.style.borderWidth = borderWidth + "px";
    box.style.backgroundColor = backgroundColor;
}

