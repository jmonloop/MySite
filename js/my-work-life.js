let halfwindow = $(window).height() / 2;

// Scrolling animations
let controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "60%"
    }
});

// define tweens
let tweenD1 = TweenMax.to("#eventDate1", 1, {
    y: halfwindow,
    ease: Power2.easeInOut
});
let tweenE1 = TweenMax.from("#event1", 1, {
    x: 1000,
    ease: Power2.easeOut
});
let tweenD2 = TweenMax.to("#eventDate2", 1, {
    y: halfwindow,
    ease: Power2.easeInOut
});
let tweenE2 = TweenMax.from("#event2", 1, {
    x: 1000,
    ease: Power2.easeOut
});
let tweenE22 = TweenMax.from("#event2-2", 1, {
    x: 1000,
    ease: Power2.easeOut
});
let tweenD3 = TweenMax.to("#eventDate3", 1, {
    y: halfwindow,
    ease: Power2.easeInOut
});
let tweenE3 = TweenMax.from("#event3", 1, {
    x: 1000,
    ease: Power2.easeOut
});
let tweenD4 = TweenMax.to("#eventDate4", 1, {
    y: halfwindow,
    ease: Power2.easeInOut
});
let tweenE4 = TweenMax.from("#event4", 1, {
    x: 1000,
    ease: Power2.easeOut
});
let tweenD5 = TweenMax.to("#eventDate5", 1, {
    y: halfwindow,
    ease: Power2.easeInOut
});
let tweenE5 = TweenMax.from("#event5", 1, {
    x: 1000,
    ease: Power2.easeOut
});
let tweenD6 = TweenMax.to("#eventDate6", 1, {
    y: halfwindow,
    ease: Power2.easeInOut
});
let tweenE6 = TweenMax.from("#event6", 1, {
    x: 1000,
    ease: Power2.easeOut
});
let tweenE62 = TweenMax.from("#event6-2", 1, {
    x: 1000,
    ease: Power2.easeOut
});
let tweenD7 = TweenMax.to("#eventDate7", 1, {
    y: halfwindow,
    ease: Power2.easeInOut
});
let tweenE7 = TweenMax.from("#event7", 1, {
    x: 1000,
    ease: Power2.easeOut
});

// build scene
new ScrollMagic.Scene({
        triggerElement: "#event1"
    })
    .setTween(tweenD1)
    .addTo(controller);
new ScrollMagic.Scene({
        triggerElement: "#event1"
    })
    .setTween(tweenE1)
    .addTo(controller);
new ScrollMagic.Scene({
        triggerElement: "#event2"
    })
    .setTween(tweenD2)
    .addTo(controller);
new ScrollMagic.Scene({
        triggerElement: "#event2"
    })
    .setTween(tweenE2)
    .addTo(controller);
new ScrollMagic.Scene({
        triggerElement: "#event2-2"
    })
    .setTween(tweenE22)
    .addTo(controller);
new ScrollMagic.Scene({
        triggerElement: "#event3"
    })
    .setTween(tweenD3)
    .addTo(controller);
new ScrollMagic.Scene({
        triggerElement: "#event3"
    })
    .setTween(tweenE3)
    .addTo(controller);
new ScrollMagic.Scene({
        triggerElement: "#event4"
    })
    .setTween(tweenD4)
    .addTo(controller);
new ScrollMagic.Scene({
        triggerElement: "#event4"
    })
    .setTween(tweenE4)
    .addTo(controller);
new ScrollMagic.Scene({
        triggerElement: "#event5"
    })
    .setTween(tweenD5)
    .addTo(controller);
new ScrollMagic.Scene({
        triggerElement: "#event5"
    })
    .setTween(tweenE5)
    .addTo(controller);
new ScrollMagic.Scene({
        triggerElement: "#event6"
    })
    .setTween(tweenD6)
    .addTo(controller);
new ScrollMagic.Scene({
        triggerElement: "#event6"
    })
    .setTween(tweenE6)
    .addTo(controller);
new ScrollMagic.Scene({
        triggerElement: "#event6-2"
    })
    .setTween(tweenE62)
    .addTo(controller);
new ScrollMagic.Scene({
        triggerElement: "#event7"
    })
    .setTween(tweenD7)
    .addTo(controller);
new ScrollMagic.Scene({
        triggerElement: "#event7"
    })
    .setTween(tweenE7)
    .addTo(controller);


// change height of spacers to fix resizing issue

$(".eventSpacer").css("height", $(window).height() / 2 + 32);