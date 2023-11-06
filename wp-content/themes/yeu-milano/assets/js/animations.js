gsap.registerPlugin(ScrollTrigger);

document.addEventListener("scroll", () => {
    let backgroundImage1Rect = document.querySelector("#undertextBackgroundImage1").getBoundingClientRect();
    gsap.to("#undertextBackgroundImage1", {
        y: -backgroundImage1Rect.top * 0.4,
        duration: 0,
    });

    let backgroundImage2Rect = document.querySelector("#undertextBackgroundImage2").getBoundingClientRect();
    gsap.to("#undertextBackgroundImage2", {
        y: -backgroundImage2Rect.top * 0.2,
        duration: 0,
    });
});
