let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item"); // Fixed selector from `.items` to `.item`
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let lengthItems = items.length - 1;
let active = 0;
let refreshSlider = setInterval(() => {
    next.click();
}, 5000);

next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
};

prev.onclick = function () {
    if (active - 1 < 0) { // Corrected logic to decrement
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
};

function reloadSlider() {
    let checkLeft = items[active].offsetLeft; // Fixed typo
    list.style.left = -checkLeft + "px";
    let lastActiveDot = document.querySelector(".slider .dots li.active");
    if (lastActiveDot) {
        lastActiveDot.classList.remove("active");
    }
    dots[active].classList.add("active");
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {
        next.click();
    }, 5000);
}

dots.forEach((li, key) => {
    li.addEventListener("click", function () {
        active = key;
        reloadSlider();
    });
});
