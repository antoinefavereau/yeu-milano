var afficheCarousel = new Swiper(".afficheCarousel", {
    direction: "vertical",
    slidesPerView: "auto",
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

const arc = document.querySelector("#book .arc");
const content = document.querySelector("#book .content");

const arcSpeed = 8;
const contentSpeed = 2;

updateArc();
document.addEventListener("scroll", updateArc);

function updateArc() {
    const bookTop = document.querySelector("#book").getBoundingClientRect().top;
    const arcTop = Math.min(0, Math.max(-1000, (bookTop - window.innerHeight * 0.4) * arcSpeed));
    const contentTop = Math.min(0, Math.max(-200, (bookTop - window.innerHeight * 0.4) * contentSpeed));
    const width = 100 - arcTop;
    arc.style.transform = "translateX(-50%) translateY(" + arcTop + "px)";
    arc.style.width = width + "%";
    content.style.transform = "translateY(" + contentTop + "px)";
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

// modalImage

document.querySelectorAll(".modalImage").forEach((image) => {
    image.addEventListener("click", () => {
        document.querySelector("#imageModal img").src = image.dataset.image || image.src;
        document.querySelector("#imageModal").classList.add("active");
        document.body.classList.add("modalOpen");
    });
});
document.querySelectorAll("#imageModal .background, #imageModal .close").forEach((element) => {
    element.addEventListener("click", () => {
        document.querySelector("#imageModal").classList.remove("active");
        document.body.classList.remove("modalOpen");
    });
});

// book

var book = document.querySelector(".book");
var paper = document.querySelectorAll(".paper");
var si = paper.length;
var z = 1;

function turnRight() {
    if (si > 1) {
        book.classList.add("open");
        si--;
        document.querySelectorAll(".paper.flip").forEach((element) => {
            element.style.pointerEvents = "none";
        });
        paper[si].classList.add("flip");
        z++;
        paper[si].style.zIndex = z;
    }
}

function turnLeft() {
    if (si > paper.length - 2) {
        book.classList.remove("open");
    } else {
        paper[si+1].style.pointerEvents = "all";
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
    element.addEventListener("click", (event) => {
        if (!event.target.closest(".see")) {
            turnRight();
        }
    });
});
document.querySelectorAll(".book .paper .back").forEach((element) => {
    element.addEventListener("click", (event) => {
        if (!event.target.closest(".see")) {
            turnLeft();
        }
    });
});
