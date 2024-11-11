function navAnimation() {
    let nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        var tl = gsap.timeline()
        tl.to("#nav-bottom", {
            height: "21vh",
        })

        tl.to("#nav-part2 h5 span", {
            display: "block",
        })

        tl.to("#nav-part2 h5 span", {
            y: 0,
            duration: "0.3",
            stagger: {
                amount: "0.3"
            }
        })
    })


    nav.addEventListener("mouseleave", function () {
        var tl = gsap.timeline()
        tl.to("#nav-part2 h5 span", {
            y: 25,
            // duration:"0.2",
            stagger: {
                amount: "0.6"
            }
        })

        tl.to("#nav-part2 h5 span", {
            display: "none",
            duration: "0.2"
        })

        tl.to("#nav-bottom", {
            height: 0,
            duration: "0.2"
        })
    })


}
function imgAnimation() {
    let rightElems = document.querySelectorAll(".right-elem");

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 40,
                y: dets.y - elem.getBoundingClientRect().y - 90
            })
        })
    })
}


navAnimation();

imgAnimation();



// let mix = document.querySelector("#mixup")

// let curser = document.querySelector("#curser")

// mix.addEventListener("mousemove", function (dets) {
//     gsap.to(curser, {
//         x: dets.x - curser.getBoundingClientRect().x -10,
//         y: dets.y - curser.getBoundingClientRect().y -600,
//     })

//     mix.addEventListener("mouseenter", function () {
//         gsap.to(curser, {
//             scale: 1,
//             duration: 1,
//         })
//     })
//     mix.addEventListener("mouseleave", function () {
//         gsap.from(curser, {
//             scale: 0,
//             duration: 0.5,
//         })
//     })
// })


function clicked() {
    let page3Center = document.querySelector(".mixup")

    let video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1.05) scaleY(1.05)",
            opacity: 1,
        })
        console.log("first");
    })
    page3Center.addEventListener("mouseleave", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 0,
        })
        console.log("first");
    })

}

clicked();

function page6Animations() {
    let section = document.querySelectorAll("#sec-right");

    section.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1;
            elem.childNodes[3].play();
            console.log(elem.childNodes);
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0;
            elem.childNodes[3].load();
            console.log(elem.childNodes);
        })
    })

}

page6Animations();


const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});
