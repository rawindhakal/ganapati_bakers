var images = [
    "assets/images/slider/0.jpg",
    "assets/images/slider/1.jpg",
    "assets/images/slider/2.jpg",
    "assets/images/slider/3.jpg",
    "assets/images/slider/4.jpg",
    "assets/images/slider/5.jpg",
    "assets/images/slider/6.jpg",
    "assets/images/slider/7.jpg",
    "assets/images/slider/8.jpg",
    "assets/images/slider/9.jpg",
    "assets/images/slider/10.jpg",
    "assets/images/slider/11.jpg",
]
var x = 0; // Start Point
var imgs = document.getElementById('img');
setInterval(slider, 2000);


// Change Image
function slider() {
    if (x < images.length) {
        x = x + 1;
    } else {
        x = 1;
    }
    imgs.innerHTML = "<img src=" + images[x - 1] + ">";
}


var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

function buymsg() {
    // alert("The product will be soon available for purchase.")
    var items = 0;
    items = items + 1;
    document.getElementById("count").innerHTML = items;
}