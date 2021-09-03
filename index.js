// keycode
var imgs = Array.from(document.querySelectorAll(".item img"));
var boxContainer = document.getElementById("boxContainer");
var innerBox = document.getElementById("innerBox");
var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var currentIndex = 0;
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (eventInfo) {
        boxContainer.style.display = "flex"
        console.log(eventInfo.target)
        currentIndex = imgs.indexOf(eventInfo.target)
        var imgSrc = eventInfo.target.getAttribute("src")
        innerBox.style.backgroundImage = "url(" + imgSrc + ")"
    })
}
close.addEventListener("click", closeSlide)
function closeSlide() {
    boxContainer.style.display = "none"
}
next.addEventListener("click", nextSlide)
function nextSlide() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0
    }
    var imgSrc = imgs[currentIndex].getAttribute("src")
    innerBox.style.backgroundImage = "url(" + imgSrc + ")"
}
prev.addEventListener("click", nextSlide)
function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    var imgSrc = imgs[currentIndex].getAttribute("src")
    innerBox.style.backgroundImage = "url(" + imgSrc + ")"
}
document.addEventListener("keyup", function (event) {
    console.log(event.code)
    if (event.code == "ArrowRight") {
        nextSlide();

    }
    else if (event.code == "ArrowLeft") {
        prevSlide();

    }
    else if (event.code == "Escape") {
        closeSlide();
    }
})

