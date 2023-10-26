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

var logoCarousel = new Swiper(".logoCarousel", {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

document.addEventListener("scroll", () => {
    var arcTop = Math.min(250, Math.max(-500, (document.querySelector("#book").getBoundingClientRect().top - 100) * 8));
    var contentTop = Math.min(350, Math.max(50, (document.querySelector("#book").getBoundingClientRect().top + 0) * 2));
    var width = 850 - (arcTop + 500);
    document.querySelector("#book .arc").style.top = arcTop + "px";
    document.querySelector("#book .arc").style.width = width + "%";
    document.querySelector("#book .content").style.top = contentTop + "px";
});

// logos

const scrollerInner = document.querySelector("#logos ul");
const scrollerContent = document.querySelectorAll("#logos ul li");

for (let i = 0; i < 3; i++) {
    scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerInner.appendChild(duplicatedItem);
    });
}

// book

var page = document.querySelectorAll(".page");
var si = page.length;
var z = 1;

function turnRight() {
    if (si >= 1) {
        si--;
        page[si].classList.add("flip");
        z++;
        page[si].style.zIndex = z;
    }
}

function turnLeft() {
    if (si < page.length) {
        si++;
        page[si - 1].className = "page";
        setTimeout(function () {
            page[si - 1].style.zIndex = "auto";
        }, 350);
    }
}

document.querySelectorAll(".book .page .front").forEach((element) => {
    element.addEventListener("click", () => {
        turnRight();
    });
});
document.querySelectorAll(".book .page .back").forEach((element) => {
    element.addEventListener("click", () => {
        turnLeft();
    });
});
