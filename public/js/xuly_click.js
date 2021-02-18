window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll1").style.visibility = "visible";
    } else {
        document.getElementById("scroll1").style.visibility = "hidden";
    }
};