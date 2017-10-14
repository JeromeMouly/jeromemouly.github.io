/* ----- Menu ----- */
function openMenu() {
    document.getElementById("menu").style.height = "100%";
}

function closeMenu() {
    document.getElementById("menu").style.height = "0%";
}


/* ----- Portfolio Slider ----- */

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 2 seconds
}