var i = 0; // Start Point
var images = []; // Images Array
var time = 3000; // Time Between Switch

// Image List
images[0] = "../assets/images/slider/0.jpg";
images[1] = "../assets/images/slider/1.jpg";
images[2] = "../assets/images/slider/2.jpg";
images[3] = "../assets/images/slider/3.jpg";
images[4] = "../assets/images/slider/4.jpg";
images[5] = "../assets/images/slider/5.jpg";
images[6] = "../assets/images/slider/6.jpg";
images[7] = "../assets/images/slider/7.jpg";
images[8] = "../assets/images/slider/8.jpg";
images[9] = "../assets/images/slider/9.jpg";
images[10] = "../assets/images/slider/10.jpg";
images[11] = "../assets/images/slider/11.jpg";


// Change Image
function changeImg() {
    document.slide.src = images[i];

    // Check If Index Is Under Max
    if (i < images.length - 1) {
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To O
        i = 0;
    }

    // Run function every x seconds
    setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;



var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

function buymsg() {
    // alert("The product will be soon available for purchase.")
    var items = 0;
    items = items + 1;
    document.getElementById("count").innerHTML = items;
}