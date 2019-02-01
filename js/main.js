var controller = new ScrollMagic.Controller();
TweenMax.set(".opaScroll",{autoAlpha:0});

var gPopIn = TweenMax.staggerFromTo('.opaScroll', 0.5,
    {
    	autoAlpha:0,
    },
    {
      autoAlpha:1,
    },
    0.4
);

var bgSwitch = TweenMax.staggerFromTo('.bg', 0.1, {backgroundColor: "#FFFFFF", color: "#000000"}, {backgroundColor: "#28190E", color: "#FFFFFF"}, 1.4);
var headerAnimation = TweenMax.staggerFromTo('.intro-faceBody', 1, {transform: "translate(0px,0px)"}, {transform: "translate(0px,40%)"}, 1.0);


var separationAnimation = TweenMax.staggerFromTo('.opaScrollSep', 1,
    {
    	autoAlpha:0,
    },
    {
      autoAlpha:1,
    },
    1
);

// create a scene
var Scene = new ScrollMagic.Scene({
		triggerElement: '#my-sticky-element',
        duration: 400,    // the scene should last for a scroll distance of 100px
        offset: 100,    // start this scene after scrolling for 50px
        triggerHook: "onEnter",
        reverse: true
    })
	Scene.setClassToggle("#my-sticky-element", "paragraphCent");
	//Scene.setPin("#my-sticky-element");
    Scene.addTo(controller); // assign the scene to the controller

var scene2 = new ScrollMagic.Scene({
		triggerElement: '#scene2',
		duration: 0,
		offset: 100,
		triggerHook: "onEnter",
		reverse: true
	})
	scene2.setClassToggle("#img-hold", "easeUp");
	scene2.addTo(controller);

var scene3 = new ScrollMagic.Scene({
		triggerElement: '#scene3',
		duration: 500,
		offset: 400,
		triggerHook: "onEnter",
		reverse: true
	})
	scene3.setTween(gPopIn);
	scene3.addTo(controller);

var scene4 = new ScrollMagic.Scene({
		triggerElement: '#scene4',
		duration: 2000,
		offset: 800,
		triggerHook: "onEnter",
		reverse: true
	})
	scene4.setPin("#scene4");
	scene4.setTween(bgSwitch);
	scene4.addTo(controller);

var scene5 = new ScrollMagic.Scene({
		triggerElement: '#scene5',
		duration: 500,
		offset: 200,
		triggerHook: "onEnter",
		reverse: true
})
	scene5.setTween(separationAnimation)
	scene5.addTo(controller);

var sceneOpen = new ScrollMagic.Scene({
		duration: 800,
		offset: 0,
		triggerHook: "onEnter",
		reverse: true
	})
	
	scene5.setPin("#intro");
	sceneOpen.setTween(headerAnimation);
	sceneOpen.addTo(controller);

