function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

locomotive()
















var head = document.querySelector("#nav2 a")
var logo = document.querySelector("#nav img")


head.addEventListener("mouseover", function(){
    gsap.to("#cursor",{
        scale: 3,
        duration:.2
    })
})

head.addEventListener("mouseleave", function(){
    gsap.to("#cursor",{
        scale: 1,
        duration:.2
    })
})
logo.addEventListener("mouseover", function(){
    gsap.to("#cursor",{
        scale: 3,
        duration:.2
    })
})

logo.addEventListener("mouseleave", function(){
    gsap.to("#cursor",{
        scale: 1,
        duration:.2
    })
})


document.addEventListener("mousemove", function(dets){
    gsap.to("#cursor",{
        top:dets.y,
        left:dets.x,
    })
})

gsap.to("#page1 video, #page1 h1",{
    filter: "blur(50px)",
    transform: "scaleX(0.9)",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        // markers: true,
        start: "top 0%",
        end: "top -50%",
        scrub: true
    }
})


gsap.to("#nav2",{
    y: -100,
    duration: 1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "#main",
        // markers: true,
        start: "top 0%",
        end: "top -10%",
        scrub: true
    }
})

gsap.to("#nav i",{
    display: "block",
    duration: 1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "#main",
        // markers: true,
        start: "top -15%",
        end: "top -20%",
        scrub: true
    }
})

function page2(){
    gsap.to("#page2-container-left img",{
        transform:"translateY(-50%) translateX(69%)",
        duration:10,
        repeat:-1,
        ease:"none"
    })
    
    gsap.from("#page2-container-right h1",{
        scale: 1.2,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            // markers: true,
            start: "top 55%",
            end: "top 42%",
            scrub: 2
        }
    })
    
    gsap.from("#page2-container-left",{
        scale: 1.1,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            // markers: true,
            start: "top 55%",
            end: "top 42%",
            scrub: 2
        }
    })
    
    gsap.from("#page2-container-right p",{
        scale: 1.1,
        duration:1,
        y: 40,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            // markers: true,
            start: "top 40%",
            end: "top 22%",
            scrub: 2
        }
    })
    
    gsap.from("#page2-container-right button",{
        scale: 1.3,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            // markers: true,
            start: "top 25%",
            end: "top 9%",
            scrub: 1
        }
    })
    
}

page2()

///

function page3(){
    var vid = document.querySelector("#page3-container-right")

vid.addEventListener("mouseenter", function(){
    gsap.to("#page3-container-right",{
        scale: 1.1,
        duration:.5
    })
})
vid.addEventListener("mouseleave", function(){
    gsap.to("#page3-container-right",{
        scale: 1,
        duration:.5
    })
})


gsap.from("#page3-container-left h1",{
    scale: 1.1,
    y: 100,
    duration:1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // markers: true,
        start: "top 55%",
        end: "top 42%",
        scrub: 2
    }
})

gsap.from("#page3-container-right",{
    scale: 1.1,
    y: 100,
    duration:1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // markers: true,
        start: "top 55%",
        end: "top 42%",
        scrub: 2
    }
})

gsap.from("#page3-container-left p",{
    scale: 1.1,
    duration:1,
    y: 40,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // markers: true,
        start: "top 40%",
        end: "top 22%",
        scrub: 2
    }
})

gsap.from("#page3-container-left button",{
    scale: 1.3,
    y: 50,
    duration:1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // markers: true,
        start: "top 25%",
        end: "top 9%",
        scrub: 1
    }
})
}

page3()

//////

function page4(){
    gsap.from("#page4 h2",{
        scale: 1.2,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            // markers: true,
            start: "top -30%",
            end: "top -50%",
            scrub: 2
        }
    })
    
    gsap.from("#page4 p",{
        scale: 1.2,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            // markers: true,
            start: "top -35%",
            end: "top -55%",
            scrub: 2
        }
    })
    
    gsap.from("#page4 .btn4",{
        scale: 1.2,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            // markers: true,
            start: "top -40%",
            end: "top -58%",
            scrub: 2
        }
    })
    
    /////
    
    gsap.from("#page41-container-left h1",{
        scale: 1.2,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page41-container",
            scroller: "#main",
            // markers: true,
            start: "top 89%",
            end: "top 65%",
            scrub: 2
        }
    })
    
    gsap.from("#page41-container-right",{
        scale: 1.2,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page41-container",
            scroller: "#main",
            // markers: true,
            start: "top 89%",
            end: "top 65%",
            scrub: 2
        }
    })


    gsap.from("#page42-container-left",{
        scale: 1.1,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page42-container",
            scroller: "#main",
            // markers: true,
            start: "top 94%",
            end: "top 65%",
            scrub: 2
        }
    })
    
    gsap.from("#page42-container-right h1",{
        scale: 1.08,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page42-container",
            scroller: "#main",
            // markers: true,
            start: "top 89%",
            end: "top 65%",
            scrub: 2
        }
    })
    
    gsap.from("#page42-container-right button",{
        scale: 1.2,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page42-container",
            scroller: "#main",
            // markers: true,
            start: "top 70%",
            end: "top 55%",
            scrub: 2
        }
    })
    
    /////
    
    gsap.from("#page43-container-left h3",{
        scale: 1.2,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page43-container",
            scroller: "#main",
            // markers: true,
            start: "top 89%",
            end: "top 65%",
            scrub: 2
        }
    })
    
    gsap.from("#page43-container-right",{
        scale: 1.2,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page43-container",
            scroller: "#main",
            // markers: true,
            start: "top 89%",
            end: "top 65%",
            scrub: 2
        }
    })
    
    /////
    
    
    gsap.from("#page44-container-left",{
        scale: 1.2,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page44-container",
            scroller: "#main",
            // markers: true,
            start: "top 89%",
            end: "top 65%",
            scrub: 2
        }
    })
    
    gsap.from("#page44-container-right h3 ",{
        scale: 1.2,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page44-container",
            scroller: "#main",
            // markers: true,
            start: "top 89%",
            end: "top 65%",
            scrub: 2
        }
    })
    
    gsap.from("#page44-container-right .btn44 ",{
        scale: 1.2,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page44-container",
            scroller: "#main",
            // markers: true,
            start: "top 75%",
            end: "top 64%",
            scrub: 2
        }
    })
}

page4()


////


///

function page6(){
    gsap.to("#page-5 #page5-containers #info, #page-5 #page5-containers #page5-container1, #page-5 #page5-containers #page5-container2, #page-5 #page5-containers #page5-container2",{
        transform: "translateX(-100%)",
        scrollTrigger:{
            trigger: "#page-5",
            scroller: "#main",
            // markers: true,
            start:"top 0%",
            end:"top -100%",
            scrub:2,
            pin:true
        }
    })
    
    
    ////
    
    gsap.from("#page6 #heading1 h1",{
        scale: 1.2,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page6 #heading1",
            scroller: "#main",
            // markers: true,
            start: "top 50%",
            end: "top 40%",
            scrub: 2
        }
    })
    
    gsap.from("#page-6-1 #left-6 h2, #page-6-1 #right-6 #top h3, #page-6-1 #right-6 #botton #h4",{
        scale: 1.15,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page-6-1",
            scroller: "#main",
            // markers: true,
            start: "top 92%",
            end: "top 40%",
            scrub: 2
        }
    })
}

page6()

/////



function page5(){
    var tl4 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            start:"top 0",
            end:"top -70%",
            scrub: 1,
            pin:true
        }
    })
    tl4.to("#page5-containers",{
        transform:"translateX(-77%)",
    },"okay")
    tl4.to("#page5 #slider-in",{
        x:590,
    },"okay")
    
    
    gsap.from("#page5-containers #info h1, #page5-container img",{
        scale: 1.1,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top 62%",
            scrub: 2
        }
    })
    
    
    gsap.from("#page5-containers #info p, #page5-container h1",{
        scale: 1.2,
        y: 50,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main",
            // markers: true,
            start: "top 45%",
            end: "top 20%",
            scrub: 2
        }
    })
    
    gsap.from("#page5-containers #info button",{
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main",
            // markers: true,
            start: "top 20%",
            end: "top -20%",
            scrub: 2
        }
    })
}

page5()



function page7(){
    gsap.from("#page7-containers, #page7-containers #text1, #page7-containers #text2, #page7-containers #text3",{
        scale: 1.3,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page7",
            scroller: "#main",
            // markers: true,
            start: "top 70%",
            end: "top 0%",
            scrub: 2
        }
    })
    
    gsap.from("#page7-containers #text1, #page7-containers #text2, #page7-containers #text3",{
        scale: 1.5,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page7",
            scroller: "#main",
            // markers: true,
            start: "top 70%",
            end: "top 0%",
            scrub: 2
        }
    })
    
}
page7()

//////



function textflicker(){
    var text = "We are brain.space     The brain data company"


var splittedText = text.split("")

var clutter = ""

splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

var h1Text = document.querySelector("#page1 h1")
h1Text.innerHTML = clutter

gsap.to("#page1 h1 span",{
    display:"initial",
    stagger:0.1
})
}
textflicker()

////
function page8(){
    gsap.from("#page8 #box1 #box1-left h1, #page8 #box1 #box1-right img", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page8",
            scroller: "#main",
            // markers: true,
            start: "top 60%",
            end: "top 40%",
            scrub: 2
        }
    })
    
    gsap.from("#page8 #box1 #box1-left p", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page8",
            scroller: "#main",
            // markers: true,
            start: "top 40%",
            end: "top 30%",
            scrub: 2
        }
    })
    
    
    gsap.from("#page8 #box2", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#box1",
            scroller: "#main",
            // markers: true,
            start: "top 30%",
            end: "top 20%",
            scrub: 2
        }
    })
    
    gsap.from("#page8 #box3", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#box1",
            scroller: "#main",
            // markers: true,
            start: "top 0%",
            end: "top -20%",
            scrub: 2
        }
    })
    
    gsap.from("#page8 button", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#box2",
            scroller: "#main",
            // markers: true,
            start: "top 30%",
            end: "top 20%",
            scrub: 2
        }
    })
    
}

page8()
////

function colorchaneonarrow(){
    document.querySelector("#page9, #page9-2").addEventListener("mousemove", function (dets) {
        document.querySelector("#page9, #page9-2").style.background = `conic-gradient(at ${dets.x}px ${dets.y}px,rgb(255, 228, 233),aliceblue,rgb(205, 243, 255),rgb(195, 255, 195),lightyellow,rgb(251, 226, 230))`
    })
}

colorchaneonarrow()


/////


function page9(){
    gsap.from("#page9 #page9-1-left h1, #page9 #page9-1-right h3 ", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page9",
            scroller: "#main",
            // markers: true,
            start: "top 50%",
            end: "top 20%",
            scrub: 2
        }
    })
    
    gsap.from("#page9 #page9-1-right p ", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page9",
            scroller: "#main",
            // markers: true,
            start: "top 40%",
            end: "top 25%",
            scrub: 2
        }
    })
    
    ///
    
    
    gsap.from("#page9 #page9-2 #page9-2-left #bar, #page9 #page9-2 #page9-2-right #bar ", {
        scale: 1.2,
        y: 80,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page9-2",
            scroller: "#main",
            // markers: true,
            start: "top 60%",
            end: "top -100%",
            scrub: 2
        }
    })
    
    //
    
    
    gsap.from("#page9 #page9-3 #page9-3-left h1, #page9 #page9-3 #page9-3-right img ", {
        scale: 1.3,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page9-3",
            scroller: "#main",
            // markers: true,
            start: "top 75%",
            end: "top 35%",
            scrub: 2
        }
    })
    
    gsap.from("#page9 #page9-3 #page9-3-left p", {
        scale: 1.3,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page9-3",
            scroller: "#main",
            // markers: true,
            start: "top 55%",
            end: "top 35%",
            scrub: 2
        }
    })
    
    gsap.from("#page9 #img", {
        scale: 1.3,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page9-3",
            scroller: "#main",
            // markers: true,
            start: "top -25%",
            end: "top -35%",
            scrub: 2
        }
    })
}

page9()

////

function page10(){
    gsap.from("#page10 #box #left h1, #page10 #box #left p, #page10 #box #right video", {
        scale: 1.3,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page10",
            scroller: "#main",
            // markers: true,
            start: "top 30%",
            end: "top -20%",
            scrub: 2
        }
    })
    
    
    gsap.from("#page10 #box #left a", {
        scale: 1.3,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page10",
            scroller: "#main",
            // markers: true,
            start: "top 10%",
            end: "top -30%",
            scrub: 2
        }
    })
}
page10()

///


function page11(){
    gsap.from("#page11 #bar1 #box img", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page11",
            scroller: "#main",
            // markers: true,
            start: "top 90%",
            end: "top 40%",
            scrub: 2
        }
    })
    
    
    gsap.from("#page11 h3", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page11",
            scroller: "#main",
            // markers: true,
            start: "top 70%",
            end: "top 20%",
            scrub: 2
        }
    })
    
    gsap.from("#page11 button", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page11",
            scroller: "#main",
            // markers: true,
            start: "top 40%",
            end: "top 10%",
            scrub: 2
        }
    })
    
}

page11()

///


function page12(){
    gsap.from("#page12 #left h2", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page12",
            scroller: "#main",
            // markers: true,
            start: "top 75%",
            end: "top 40%",
            scrub: 2
        }
    })
    
    gsap.from("#page12 #left p", {
        scale: 1.2,
        y: 60,
        duration:1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page12",
            scroller: "#main",
            // markers: true,
            start: "top 50%",
            end: "top 20%",
            scrub: 2
        }
    })
    
    
    var anchor = document.querySelector("#page13 #bar #right a")
    
    anchor.addEventListener("mouseenter", function(){
        gsap.to("#cursor",{
            scale:2.5,
            duration: .3
        })
    })
    
    anchor.addEventListener("mouseleave", function(){
        gsap.to("#cursor",{
            scale:1,
            duration: .3
        })
    })
}

page12()