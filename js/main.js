// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 50,
});
// main
sr.reveal(".box-left", { origin: "left" });
sr.reveal(".box-right", { origin: "right" });
sr.reveal("#介绍 img", {   origin: "left"});
sr.reveal("#介绍 h2, #介绍 h5", { origin: "right"});
sr.reveal("#动物 img", { origin: "right"});
sr.reveal("#动物 h2, #动物 h5", { origin: "left"});
sr.reveal("#植物 img", {   origin: "left"});
sr.reveal("#植物 h2, #植物 h5", { origin: "right"});
sr.reveal("#危害 img", { origin: "right"});
sr.reveal("#危害 h2, #危害 h5", { origin: "left"});

// jieshao
sr.reveal(".main .image", { origin: "left" });
sr.reveal(".main .about-text", { origin: "right" });

//weihai
sr.reveal(".content h1", { origin: "left" });
sr.reveal(".content .main1", { origin: "top" , delay: 400});


function headerChangeColor() {
    const header = document.getElementById("header");
    if (this.scrollY >= 80) {
        header.classList.add("change-header-color")
    } else {
        header.classList.remove("change-header-color")
    }
}
window.addEventListener("scroll", headerChangeColor);


function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    //when the scroll is higher than 200 viewport height, add the show-scroll class to the tag with the scroll-top class
    if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
