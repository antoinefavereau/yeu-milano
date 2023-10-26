var afficheCarousel = new Swiper(".afficheCarousel", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 20,
    mousewheel: true,

    navigation: {
        nextEl: ".afficheCarousel-button-next",
        prevEl: ".afficheCarousel-button-prev",
    },
});

changeAffiche(Array.from(document.querySelectorAll("#afficheSection .listDiv .swiper-slide"))[0].dataset.id);

Array.from(document.querySelectorAll("#afficheSection .listDiv .swiper-slide")).map(function (element) {
    element.addEventListener("click", function () {
        changeAffiche(element.dataset.id);
    });
});

function changeAffiche(id) {
    Array.from(document.querySelectorAll("#afficheSection .imageDiv .item")).map(function (element) {
        if (element.dataset.id === id) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
    Array.from(document.querySelectorAll("#afficheSection .descriptionDiv .item")).map(function (element) {
        if (element.dataset.id === id) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
}

document.querySelector("#topSection .arrowDown").addEventListener("click", () => {
    document.querySelector("#afficheSection").scrollIntoView({
        behavior: "smooth",
    });
});
document.querySelector("#footer .arrowUp").addEventListener("click", () => {
    document.querySelector("#topSection").scrollIntoView({
        behavior: "smooth",
    });
});

updateArc();
document.addEventListener("scroll", updateArc);

function updateArc() {
    let arcTop = Math.min(250, Math.max(-500, (document.querySelector("#book").getBoundingClientRect().top - 100) * 8));
    let contentTop = Math.min(350, Math.max(50, (document.querySelector("#book").getBoundingClientRect().top + 0) * 2));
    let width = 850 - (arcTop + 500);
    document.querySelector("#book .arc").style.top = arcTop + "px";
    document.querySelector("#book .arc").style.width = width + "%";
    document.querySelector("#book .content").style.top = contentTop + "px";
}

// logos

const scrollerInner = document.querySelector("#logos ul");
const scrollerContent = document.querySelectorAll("#logos ul li");

for (let i = 0; i < 3; i++) {
    scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.className = "";
        scrollerInner.appendChild(duplicatedItem);
    });
}

// book

var book = document.querySelector(".book");
var paper = document.querySelectorAll(".paper");
var si = paper.length;
var z = 1;

function turnRight() {
    if (si >= 1) {
        book.classList.add("open");
        si--;
        paper[si].classList.add("flip");
        z++;
        paper[si].style.zIndex = z;
    }
}

function turnLeft() {
    if (si > paper.length - 2) {
        book.classList.remove("open");
    }
    if (si < paper.length) {
        si++;
        paper[si - 1].classList.remove("flip");
        setTimeout(function () {
            for (let i = 0; i <= si - 1; i++) {
                paper[i].style.zIndex = "auto";
            }
        }, 350);
    }
}

document.querySelectorAll(".book .paper .front").forEach((element) => {
    element.addEventListener("click", () => {
        turnRight();
    });
});
document.querySelectorAll(".book .paper .back").forEach((element) => {
    element.addEventListener("click", () => {
        turnLeft();
    });
});
