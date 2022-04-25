$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

let closed = true;
let video = document.getElementById("video");
let popup = document.getElementById("popup");

function clicked() {
    if(closed === true) {
        popup.classList.remove("disabled");
        closed = false;
        stopVideo();
    } else {
        popup.classList.add("disabled");
        closed = true;
        stopVideo();
    }

    console.log(closed);
}

function stopVideo() {
    const source = video.src;
    video.src = '';
    video.src = source;
}