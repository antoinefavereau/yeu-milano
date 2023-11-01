gsap.registerPlugin(ScrollTrigger);

document.addEventListener("scroll", () => {
    let backgroundImage1Rect = document.querySelector("#underText .backgroundImage1").getBoundingClientRect();
    gsap.to("#undertext .backgroundimage1", {
        y: -backgroundImage1Rect.top * 0.4,
        duration: 0,
    });

    let backgroundImage2Rect = document.querySelector("#underText .backgroundImage2").getBoundingClientRect();
    gsap.to("#undertext .backgroundimage2", {
        y: -backgroundImage2Rect.top * 0.2,
        duration: 0,
    });
});
