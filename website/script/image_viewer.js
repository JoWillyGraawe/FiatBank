// Function for enlarging image
function viewImageToggle(img) {
    if (img.classList.contains("zoomed")) {
        img.style.transform = "scale(1)";
        img.style.transition = "transform 0.25s ease";
    } else {
        img.style.transform = "scale(2.0)";
        img.style.transition = "transform 0.25s ease";
    };
    img.classList.toggle("zoomed");
};

