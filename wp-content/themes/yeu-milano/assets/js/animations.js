gsap.registerPlugin(ScrollTrigger);

let backgroundImage1TopPosition = document.querySelector("#underText .backgroundImage1").getBoundingClientRect().top;
document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY - backgroundImage1TopPosition;
    gsap.to("#underText .backgroundImage1", {
        y: scrollTop * 0.3,
        duration: 0,
    });
});

let backgroundImage2TopPosition = document.querySelector("#underText .backgroundImage2").getBoundingClientRect().top;
document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY - backgroundImage2TopPosition;
    gsap.to("#underText .backgroundImage2", {
        y: scrollTop * 0.2,
        duration: 0,
    });
});
