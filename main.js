const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = "calc(50vh + " + offset * 1.15 + "px)";
    console.log('Offset: ' + offset);
    this.console.log('offset * 0.7' + offset * 0.7);
})