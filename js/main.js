var controller = new ScrollMagic.Controller();
TweenMax.set(".opaScroll",{autoAlpha:0});
const gridR = document.querySelector("#split-l");
const gridRContent = document.querySelector("#split-l > section");
/*var gridRHeight = gridR.getBoundingClientRect();
var gridRHeightFinal = gridRHeight.height/1.5;*/
var rand = 3400;
var i8Viewport = "(max-width: 414px)";

function getDuration() {
	return gridR.offsetHeight - 600;

}
console.log(getDuration())

/*function resize() {
gridRHeight = gridR.getBoundingClientRect();

var match = window.matchMedia(i8Viewport);

if (match.matches) {
	gridRHeightFinal = gridRHeight.height/1.2;
	console.log("Resized to 0.9")
}
else {
	gridRHeightFinal = gridRHeight.height/10.6;
	console.log("Resized to 1.2")
}
console.log(gridRHeight);
console.log(gridRHeightFinal);
}*/

/*window.onresize = resize;
window.onload = resize;*/

var gPopIn = TweenMax.staggerFromTo('.opaScroll', 0.5,
    {
    	autoAlpha:0,
    },
    {
      autoAlpha:1,
    },
    0.4
);

//var bgSwitch = TweenMax.staggerFromTo('.bg', 0.1, {backgroundColor: "#FFFFFF", color: "#000000"}, {backgroundColor: "#28190E", color: "#FFFFFF"}, 1.4);
var headerAnimation = TweenMax.staggerFromTo('#introBody', 1, {"--faceBody-height":"-40%"}, {"--faceBody-height":"0%"}, 1.0);

//var mirrorTL = TweenMax.staggerFromTo('.mi3', 1, {"opacity":"1"},{"opacity":"0"}, 0 )
//var mirrorTL = TweenMax.staggerFrom('.mi3', 1, {"opacity":"1"}, 8); TweenMax.staggerTo('.mi3', 1, {"opacity":"0"}, 8)
var mirrorTL = TweenMax.staggerFromTo('.mirror-img-img', 2, {autoAlpha:0, ease:Power4.easeInOut}, {autoAlpha:1, ease:Power4.easeInOut}, 1.4)
var stopTLData = [".s-bg1", ".s-bg2"]
var stopTL = TweenMax.staggerFromTo(stopTLData, 2, {autoAlpha:0, ease:Power4.easeInOut}, {autoAlpha:1, ease:Power4.easeInOut}, 1.4)

//var headerAnimation = TweenMax.staggerFromTo('#introBody', 1, {transform: "translate(0px,0px)"}, {transform: "translate(0px , calc( var(--faceWaves-height) - var(--faceBody-height))"}, 1.0);

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
		offset: 100,
		triggerHook: "onEnter",
		reverse: true
	})
	scene3.setTween(gPopIn);
	scene3.addTo(controller);

var splitScene = new ScrollMagic.Scene({
		triggerElement: '#split-container',
		triggerHook: 0,
		duration: getDuration,
		reverse: true,
		offset: -50,
	})
	splitScene.setTween(mirrorTL);
	splitScene.setPin("#split-r");
	splitScene.addTo(controller);

var scene5 = new ScrollMagic.Scene({
		triggerElement: '#scene5',
		duration: 200,
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
	
	sceneOpen.setPin("#introContainer");
	sceneOpen.setTween(headerAnimation);
	sceneOpen.addTo(controller);

var sceneStopIt = new ScrollMagic.Scene({
		triggerElement: "#sceneStop",
		duration: 800,
		offset: 160,
		triggerHook: "onEnter",
		reverse: true,
	})

	sceneStopIt.setTween(stopTL);
	sceneStopIt.addTo(controller);

